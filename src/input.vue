<template>
    <div class="jluzh-input">
        <input :value="value" :disabled="disabled" :readonly="readonly"
               :type="type" :required="required"
               @input="$emit('input', $event.target.value)"
               @change="$emit('change',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
        >
        <template v-if="iserror">
            <jluzh-icon name="warning"></jluzh-icon>
            <span>{{iserror}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'
    export default {
        name: 'jluzh-Input',
        components: {
            'jluzh-icon': Icon
        },
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            iserror: {
                type: String
            },
            type: {
                type: String,
                default: 'text',
                validator(value){
                    return ['button','checkbox','color','date','datetime-local','email','file','hidden','month',
                        'number','password','radio','range','reset','search','submit','tel','text','time','url',
                        'week'].indexOf(value) >= 0
                }
            },
            required: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    .jluzh-input{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        :not(last-child){
            margin-right: .5em;
        }
        > input {
            width: var(--input-width);
            padding: var(--input-padding);
            color: var(--input-color);
            font-size: var(--input-font-size);
            line-height: var(--input-font-size);
            border: var(--input-border);
            border-color: var(--input-border-color);
            border-radius: var(--input-border-radius);
            outline: none;
            &:hover,&:focus{
                border-color: var(--input-hover-color);
            }
            &[disabled]{
                color: var(--input-disable-color);
                background: var(--input-disable-bg);
                border-color: var(--input-disable-border-color);
                cursor: not-allowed;
            }
            &[readonly]{
                color: var(--input-readonly-color);
                background: var(--input-readonly-bg);
                border-color: var(--input-readonly-border-color);
            }
        }
    }
</style>