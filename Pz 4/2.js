let password = 'gjf_*';

if (password.length >= 4 || password.includes('*') || password.includes('_')) {
    console.log('Такой пароль корректный.')
    
} else {
    console.log('Такой пароль не корректный, введите подходящий пароль.')
}