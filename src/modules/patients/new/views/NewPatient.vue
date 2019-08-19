<template>
    <div class="new-patient-wrapper">
        <div class="patient-data-container">
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
                <label for="patientCardId">Card ID</label>
                <input 
                    type="text" 
                    :model="cardId" 
                    id="patientCardId">
            </p>
            <p>
                <label for="patientSocialCareNumber">Social Care number</label>
                <input 
                    type="text" 
                    :model="socialCareNumber" 
                    id="patientSocialCareNumber">
            </p>
            <p>
                <label for="patientGenre">Genre</label>
                <select id="patientGenre" :model="genre">
                    <option value="female">Female</option>
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
            <p>
                <label for="patientUsername">Username</label>
                <input 
                    type="text" 
                    :model="username" 
                    id="patientUsername">
            </p>
            <p>
                <label for="patientPassword">Password</label>
                <input 
                    type="password" 
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
.new-patient-wrapper {
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
    .patient-data-container {
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
        p {
            width: 48%;
            label,
            input,
            select {
                width: 100%;
            }
        }
    }
}
</style>