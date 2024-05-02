<template>
    <div>
        <h1>Регистрация</h1>
        <form>
            <input type="text" placeholder="name">
            <input type="email" placeholder="email">
            <input type="password" placeholder="password">
            <input type="password" placeholder="password confirm">
            <input type="submit" value="Зарегистрироваться">
        </form>
    </div>
</template>
<script></script>
<style>
form{
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
}
form input{
    margin: 5px;
}
</style>