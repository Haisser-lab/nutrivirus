const useForm = ()=>{

    const [form, setForm] = useState()

    const onChangeForm = (event)=>{
        const {value, name} = event.target

        const novoForm={
            ...form,
            [name]:value
        }

        setForm(novoForm)
    }

    return
}[form, onChangeForm]