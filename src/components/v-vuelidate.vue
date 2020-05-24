<template>
    <div class="container">
        <router-link :to="'/'">Регистрация</router-link>
        <form @submit.prevent="onSubmit" class="form">
            <div class="form-group">
                <label for="email">Ваша почта</label>
                <input
                        type="email"
                        id="email"
                        class="form-control"
                        :class="{'is-invalid': $v.email.$error}"
                        @blur="$v.email.$touch()"
                        v-model="email"
                >
                <div class="invalid-feedback" v-if="!$v.email.required">Ведите почту</div>
                <div class="invalid-feedback" v-if="!$v.email.email">Неправильный ввод почты</div>
                <div class="invalid-feedback" v-if="!$v.email.uniqEmail">Такая почта уже существует</div>
            </div>

            <div class="form-group">
                <label for="password">Пароль</label>
                <input
                        type="password"
                        id="password"
                        class="form-control"
                        :class="{'is-invalid': $v.password.$error}"
                        @blur="$v.password.$touch()"
                        v-model="password"
                >
                <div class="invalid-feedback" v-if="!$v.password.minLength">
                    Минимальная длина пароля {{ $v.password.$params.minLength.min }}. ваша длина {{ password.length }}.
                </div>
            </div>

            <div class="form-group">
                <label for="confirm">Подтвердите пароль</label>
                <input
                        type="password"
                        id="confirm"
                        class="form-control"
                        :class="{'is-invalid': $v.confirmPassword.$error}"
                        @blur="$v.confirmPassword.$touch()"
                        v-model="confirmPassword"
                >
                <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
                    Пароль должен совпадать
                </div>
            </div>
            <button
                    class="btn-success"
                    type="submit"
                    :disabled="$v.$invalid"
            >Зарегистрироваться
            </button>
            <button
                    class="btn-success"
                    @click="myBack"
            >Обратно
            </button>
            <pre>
        {{ $v.email }}
      </pre>
        </form>
    </div>
</template>

<script>
    import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            onSubmit() {
                console.log('Email', this.email)
                console.log('Password', this.password)
            },
            myBack() {
                this.$router.push('/')
            }
        },
        validations: {
            email: {
                required,
                email,
                uniqEmail: function (newEmail) {
                    if (newEmail === '') return true

                    return new Promise((resolve) => {
                        setTimeout(() => {
                            const value = newEmail !== 'test@mail.ru'
                            resolve(value)
                        }, 1000)
                    })
                }
            },
            password: {
                minLength: minLength(6)
            },
            confirmPassword: {
                sameAs: sameAs('password')
            }
        }
    }
</script>


<style scoped>
    .form {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: center;
    }

    .container {
        text-align: center;
    }

    .is-invalid {
        border: 1px solid red;
        border-radius: 5px;
        margin: 10px;
    }

    .invalid-feedback {
        font-size: 13px;
        color: red;
    }

    input.form-control:focus {
        outline: none;
        border-radius: 5px;

    }

    input.form-control {
        width: 300px;
        font-size: 13px;
        padding: 6px 0 4px 10px;
        border: 1px solid #cecece;
        background: #F6F6f6;
        border-radius: 8px;
        margin: 10px;
    }

    .btn-success {
        width: 200px;
    }
</style>
