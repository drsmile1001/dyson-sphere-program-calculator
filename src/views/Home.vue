<template>
  <h2 class="text-3xl mb-2 font-semibold">經過時間</h2>
  <input v-model.number="processTimes" class="border" type="number" />
  <h2 class="text-3xl mb-2 font-semibold">配方</h2>
  <table class="w-full mb-2 divide-y-2">
    <thead>
      <tr>
        <th>名稱</th>
        <th>輸入</th>
        <th>輸出</th>
        <th>費時</th>
        <th>套用數量</th>
        <th>調整數量</th>
        <th>固定</th>
      </tr>
    </thead>
    <tbody class="divide-y-2">
      <tr v-for="(recipe, i) in recipes" :key="i" class="hover:bg-gray-100">
        <td class="p-1">{{ recipe.name }}</td>
        <td class="p-1">
          <span v-for="r in recipe.inputs" :key="r">
            {{ r.resource }} x {{ r.amount }}
          </span>
        </td>
        <td class="p-1">
          <span v-for="r in recipe.outputs" :key="r">
            {{ r.resource }} x {{ r.amount }}
          </span>
        </td>
        <td class="text-right p-1">{{ recipe.processTimes }}</td>
        <td class="text-center p-1">
          {{ numberFormatter(recipe.apply) }}
        </td>
        <td class="p-1">
          <div class="flex justify-around">
            <button
              class="bg-gray-100 hover:bg-gray-200 py-1 px-2"
              @click="adjestAmount(recipe, -1)"
            >
              -1
            </button>
            <button
              class="bg-gray-100 hover:bg-gray-200 py-1 px-2"
              @click="adjestAmount(recipe)"
            >
              0
            </button>
            <button
              class="bg-gray-100 hover:bg-gray-200 py-1 px-2"
              @click="adjestAmount(recipe, 1)"
            >
              +1
            </button>
          </div>
        </td>
        <td class="text-center">
          <input type="checkbox" v-model="recipe.fix" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="flex justify-end">
    <button class="bg-gray-100 hover:bg-gray-200 py-1 px-2" @click="adapt">
      適應
    </button>
  </div>

  <h2 class="text-3xl mb-2 font-semibold">資源變動</h2>
  <table class="w-1/4 mb-2 divide-y-2">
    <thead>
      <tr>
        <th>資源</th>
        <th>變動量</th>
      </tr>
    </thead>
    <tbody class="divide-y-2">
      <tr v-for="(change, i) in changes" :key="i">
        <td class="p-1">
          {{ change.resource }}
        </td>
        <td class="text-right p-1">
          {{ numberFormatter(change.changes) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import { Recipe, recipes } from "@/Recipe";

type RecipeApply = Recipe & {
  apply: number;
  fix: boolean;
};

export default defineComponent({
  name: "Home",
  setup() {
    const state = reactive({
      recipes: [] as RecipeApply[],
      processTimes: 1,
    });

    const changes = computed(() => {
      const resourceChanges = new Map<string, number>();
      state.recipes.forEach((r) => {
        if (!r.apply) return;
        r.inputs.forEach((i) => {
          const change = (state.processTimes * i.amount) / r.processTimes;
          resourceChanges.set(
            i.resource,
            (resourceChanges.get(i.resource) ?? 0) - change * r.apply
          );
        });
        r.outputs.forEach((o) => {
          const change = (state.processTimes * o.amount) / r.processTimes;
          resourceChanges.set(
            o.resource,
            (resourceChanges.get(o.resource) ?? 0) + change * r.apply
          );
        });
      });

      return Array.from(resourceChanges.entries()).map(
        ([resource, changes]) => ({
          resource,
          changes,
        })
      );
    });

    recipes
      .map((r) =>
        Object.assign(r, {
          apply: 0,
          fix: false,
        })
      )
      .forEach((r) => {
        state.recipes.push(r);
      });

    function adapt() {
      for (let round = 0; round < 10; round++) {
        changes.value.forEach((change) => {
          if (change.changes < 0.0001 && change.changes > -0.0001) return;
          const recipe = state.recipes.find(
            (r) => r.outputs[0].resource === change.resource
          );
          if (!recipe || recipe.fix) return;

          const adaptAmount =
            change.changes /
            ((recipe?.outputs[0].amount * state.processTimes) /
              recipe.processTimes);
          recipe.apply -= adaptAmount;
        });
      }
    }

    function numberFormatter(v: number) {
      return parseFloat(v.toFixed(4)).toString();
    }

    function adjestAmount(r: RecipeApply, a?: number) {
      if (a) r.apply += a;
      else r.apply = 0;
    }

    return {
      ...toRefs(state),
      changes,
      adapt,
      numberFormatter,
      adjestAmount,
    };
  },
});
</script>
