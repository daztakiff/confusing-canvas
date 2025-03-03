<template>
      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="Open Dialog"
            variant="flat"
          ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Dialog">
            <v-card-text>
              {{ displayShapes() }}
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
</template>

<script>
import { useShapeStore } from '@/stores/shapeStore'

export default {
  setup() {

    const shapeStore = useShapeStore()

    const displayShapes = () => {
      if (shapeStore.shapeList.length === 0) {
        return 'No shapes to display'
      } else {
        return shapeStore.shapeList
        .map((shape) => shape.toString())
        .join('\n')
      }
    }

    // Return functions and reactive state
    return {
      displayShapes
    }
  }
}
</script>
