<template>
  <div class="form-group">
    <label :for="fieldName">{{ field.label }}</label>

    <template v-if="$slots.default">
      <slot 
      :value="modelValue[fieldName]" 
      @update:value="$emit('update:modelValue', $event)" />
    </template>
    <template v-else>
      <input 
      v-if="field.type === 'input'" 
        :id="fieldName" 
        v-model="modelValue[fieldName]" 
        :type="field.inputType"
        v-bind="field.attributes" />
      <select 
          v-else-if="field.type === 'select'" 
          :id="fieldName" 
          v-model="modelValue[fieldName]"
          v-bind="field.attributes">
        <option 
          v-for="option in field.options" 
          :key="option.value" 
          :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <div v-else-if="field.type === 'checkbox'">
        <label 
        v-for="option in field.options" 
        :key="option.value">
          <input type="checkbox" :value="option.value" :checked="isChecked(fieldName, option.value)"
            @change="toggleCheckbox(fieldName, option.value)" v-bind="field.attributes" />
          {{ option.label }}
        </label>
      </div>
      <textarea 
      v-else-if="field.type === 'textarea'" 
      :id="fieldName" 
      v-model="modelValue[fieldName]"
        v-bind="field.attributes" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Props {
  field: {
    label: string;
    type: 'input' | 'select' | 'checkbox' | 'textarea';
    inputType?: string;
    attributes?: Record<string, any>;
    options?: { label: string; value: any }[];
  };
  fieldName: string;
  modelValue: Record<string, any>;
  isChecked: (fieldName: string, value: any) => boolean;
  toggleCheckbox: (fieldName: string, value: any) => void;
}

defineProps<Props>();
const emit = defineEmits(['update:modelValue']);
</script>

<style scoped lang="scss">
.form-group {
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'],
  select,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; // Important for consistent width
  }

  textarea {
    resize: vertical;
  }

  input[type='checkbox'] {
    margin-right: 0.25rem;
  }
}
</style>