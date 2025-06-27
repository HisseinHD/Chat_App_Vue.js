<template>
    <div>
        <i class="icon">{{ icon }}</i> {{ title }}
    </div>    
</template>

<script>
export default {
    name: 'SettingItem',
    props: {
        title: {
        type: String,
        required: true
        },
        icon: {
        type: String,
        default: ''
        }
    }
}
</script>