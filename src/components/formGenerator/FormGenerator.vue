<template>
    <form @submit.prevent="handleSubmit">
        <FormGroup v-for="(field, fieldName) in fields" 
            :key="fieldName" 
            :field="field" 
            :fieldName="fieldName"
            :modelValue="modelValue" 
            @update:modelValue="updateValue(fieldName, $event)" 
            :isChecked="isChecked"
            :toggleCheckbox="toggleCheckbox">
            <template v-if="$slots[fieldName]" v-slot:[fieldName]="slotProps">
                <slot :name="fieldName" v-bind="slotProps" />
            </template>
        </FormGroup>
        <div class="form-actions">
            <SubmitButton title="Submit" @click="onSave" />
            <ResetButton title="Cancel" @click="onCancel" />
        </div>
    </form>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, toRefs, reactive } from 'vue';
import SubmitButton from '../ui/buttons/SubmitButton.vue';
import ResetButton from '../ui/buttons/ResetButton.vue';
import FormGroup from '../ui/formElems/FormGroup.vue';
interface Field {
    label: string;
    type: 'input' | 'select' | 'checkbox' | 'textarea';
    inputType?: string;
    attributes?: Record<string, any>;
    options?: { label: string; value: any }[];
}

interface Props {
    fields: Record<string, Field>;
    modelValue: Record<string, any>;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue', 'save', 'cancel']);

const { fields } = toRefs(props);
const modelValue = reactive({ ...props.modelValue });

const updateValue = (fieldName: string, value: any) => {
    modelValue[fieldName] = value;
    emit('update:modelValue', { ...modelValue });
};

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

const onSave = () => {
    emit('save', { ...modelValue });
};

const onCancel = () => {
    emit('cancel');
};

const handleSubmit = () => {
    onSave();
};
</script>

<style scoped lang="scss">
.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}
</style>