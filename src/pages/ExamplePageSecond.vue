<template>
    <MainLayout>
        <FormGenerator 
        main-title="Пример формы №2"
        :fields="formFields" 
        v-model:modelValue="formData" 
        @save="onSave" 
        @cancel="onCancel">
            <template #name="{ value, update: valueUpdate }">
                <label for="custom-name">Custom Name:</label>
                <input type="text" id="custom-name" :value="value" @input="
                    (event) => {
                        valueUpdate(event.target.value);
                    }
                " />
            </template>
        </FormGenerator>
    </MainLayout>
</template>
<script setup lang="ts">
import MainLayout from '../components/layout/MainLayout.vue';
import FormGenerator from '../components/formGenerator/FormGenerator.vue';
import { reactive } from 'vue';
const formFields = {
    name: { label: 'Имя', type: 'input', inputType: 'text', attributes: { placeholder: 'Как к вам обращаться' } },
    blood: {
        label: 'Группа крови',
        type: 'select',
        options: [
            { label: '0+', value: '0+' },
            { label: '0-', value: '0-' },
            { label: 'II+', value: 'II+' },
            { label: 'II-', value: 'II-' },
            { label: 'III+', value: 'III+' },
            { label: 'III-', value: 'III-' },
            { label: 'IV+', value: 'IV+' },
            { label: 'IV-', value: 'IV-' },
        ],
    },
    gender1: {
        label: 'Предпочитаевая скорость полёта шарика',
        type: 'select',
        options: [
            { label: 'до 120мс', value: '120' },
            { label: '120-130мс', value: '120-130' },
            { label: '130-140мс', value: '130-140' },
            { label: '140-150мс', value: '140-150' },
            { label: '150-160мс', value: '150-160' },
            { label: 'У меня есть РОХа мне можно 180+', value: '180' },

        ],
    },
    interests: {
        label: 'Предпочитаемый полигон',
        type: 'checkbox',
        options: [
            { label: 'SQB', value: 'sqb' },
            { label: 'Смешанный', value: 'mixed' },
            { label: 'Лесной', value: 'ащкуые' },
        ],
    },
    description: { label: 'Блок текста для заполнения', type: 'textarea', attributes: { rows: 3 } },
    
    description2: { label: 'Дополнительный Блок текста для заполнения', type: 'textarea', attributes: { rows: 3 } },
    description3: { label: 'Дополнительный Блок текста для заполнения может быть кто то тут что то напишет', type: 'textarea', attributes: { rows: 3 } },
};
const formData = reactive({
    name: '',
    email: '',
    gender: '',
    interests: [],
    description: '',
});

const onSave = (data: any) => {
    console.log('Form Data Saved:', data);
};

const onCancel = () => {
    console.log('Form Canceled');
};
</script>