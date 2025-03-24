<template>
    <form @submit.prevent="handleSubmit">
      <div v-for="(field, fieldName) in fields" :key="fieldName" class="form-group">
        <label :for="fieldName">{{ field.label }}</label>
  
        <template v-if="$slots[fieldName]">
          <slot :name="fieldName" :value="modelValue[fieldName]" @update:value="updateValue(fieldName, $event)" />
        </template>
  
        <template v-else>
          <input
            v-if="field.type === 'input'"
            :id="fieldName"
            v-model="modelValue[fieldName]"
            :type="field.inputType"
            v-bind="field.attributes"
          />
          <select v-else-if="field.type === 'select'" :id="fieldName" v-model="modelValue[fieldName]" v-bind="field.attributes">
            <option v-for="option in field.options" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
          <div v-else-if="field.type === 'checkbox'">
            <label v-for="option in field.options" :key="option.value">
              <input
                type="checkbox"
                :value="option.value"
                :checked="isChecked(fieldName, option.value)"
                @change="toggleCheckbox(fieldName, option.value)"
                v-bind="field.attributes"
              />
              {{ option.label }}
            </label>
          </div>
          <textarea
            v-else-if="field.type === 'textarea'"
            :id="fieldName"
            v-model="modelValue[fieldName]"
            v-bind="field.attributes"
          />
        </template>
      </div>
  
      <div class="form-actions">
        <SubmitButton title="Submit" @click="onSave"/>
        <ResetButton title="Cansel" @click="onCancel"/>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits, toRefs, reactive, computed } from 'vue';
import SubmitButton from '../ui/buttons/SubmitButton.vue';
import ResetButton from '../ui/buttons/ResetButton.vue';
  
  // Define props with type definitions
  interface Field {
    label: string;
    type: 'input' | 'select' | 'checkbox' | 'textarea';
    inputType?: string; // Required for input type fields like email, password etc.
    attributes?: Record<string, any>;
    options?: { label: string; value: any }[];
  }
  
  interface Props {
    fields: Record<string, Field>;
    modelValue: Record<string, any>;
  }
  
  const props = defineProps<Props>();
  const emit = defineEmits(['update:modelValue', 'save', 'cancel']);
  
  // Use toRefs for better reactivity and destructuring
  const { fields } = toRefs(props);
  
  // Reactive copy of modelValue for internal use
  const modelValue = reactive({ ...props.modelValue });

// Update the parent's modelValue when the internal modelValue changes
const updateValue = (fieldName: string, value: any) => {
  modelValue[fieldName] = value;
  emit('update:modelValue', { ...modelValue }); // Emit a copy to avoid mutation issues
};

// Checkbox logic
const isChecked = (fieldName: string, value: any) => {
  if (!Array.isArray(modelValue[fieldName])) {
    return false;
  }
  return modelValue[fieldName].includes(value);
};

const toggleCheckbox = (fieldName: string, value: any) => {
  const currentValues = Array.isArray(modelValue[fieldName]) ? [...modelValue[fieldName]] : [];
  const index = currentValues.indexOf(value);

  if (index > -1) {
    currentValues.splice(index, 1);
  } else {
    currentValues.push(value);
  }

  updateValue(fieldName, currentValues);
};

// Event handlers
const onSave = () => {
  emit('save', { ...modelValue }); // Emit a copy of the data
};

const onCancel = () => {
  emit('cancel');
};

const handleSubmit = () => {
  onSave();
};
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

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }

    &:last-child {
      background-color: #dc3545;

      &:hover {
        background-color: #c82333;
      }
    }
  }
}
</style>