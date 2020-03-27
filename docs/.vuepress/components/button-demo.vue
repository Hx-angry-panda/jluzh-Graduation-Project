<template>
    <div>
        <jluzh-button>你好</jluzh-button>
        <jluzh-button-group>
            <jluzh-button>上一页</jluzh-button>
            <jluzh-button>1</jluzh-button>
            <jluzh-button>2</jluzh-button>
            <jluzh-button>3</jluzh-button>
            <jluzh-button>...</jluzh-button>
            <jluzh-button>下一页</jluzh-button>
        </jluzh-button-group>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'
    export default {
        components: {
            'jluzh-button': Button,
            'jluzh-button-group': ButtonGroup
        }
    }
</script>