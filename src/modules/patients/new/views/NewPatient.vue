<template>
    <div class="new-patient-container">
        <div class="patient-data-wrapper">
            <p>
                <label for="patientName">Name</label>
                <input 
                    type="text" 
                    :model="name" 
                    id="patientName">
            </p>
            <p>
                <label for="patientSurname">Surname</label>
                <input 
                    type="text" 
                    :model="surname" 
                    id="patientSurname">
            </p>
            <p>
                <label for="patientGenre">Genre</label>
                <select id="patientGenre" :model="genre">
                    <option value="female" selected="selected">Female</option>
                    <option value="male">Male</option>
                </select>
            </p>
            <p>
                <label for="patientBirthDate">Birth date</label>
                <input 
                    type="text" 
                    :model="birthDate" 
                    id="patientBirthDate">
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.new-patient-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0px 20px 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: $main-background;
    .new-patient-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
    }
}
</style>