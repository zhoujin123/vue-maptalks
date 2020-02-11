<template>
    <div class="top-panel">
        <SpaceQuery />
        <ScaleLength />
        <ScaleArea />
    </div>
</template>

<script>
import ScaleLength from '../components/tools/ScaleLength'
import ScaleArea from '../components/tools/ScaleArea'
import SpaceQuery from '../components/tools/SpaceQuery'
export default {
    name: 'top-panel',
    components: {
        ScaleLength,
        ScaleArea,
        SpaceQuery
    }
}
</script>
<style>
.top-panel {
    position: absolute;
    display: flex;
    top: 16px;
    right: 16px;
}
</style>