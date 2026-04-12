import { useEffect, useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import InputMask from "react-input-mask"
import { useDispatch, useSelector } from "react-redux"
import { usePurchaseMutation } from "../../services/api"
import type { RootReducer } from "../../store"



import * as S from "./styles"
import { formataPreco, getTotalPrice } from "../../utils"
import { clear, close } from "../../store/reducers/cart"

type props = {
    onClick: () => void
}

export default function CartDelivery({ onClick }: props) {
    const [paymentStep, setPaymentStep] = useState(false)
    const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
    const { items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const totalPrice = getTotalPrice(items)

    const form = useFormik({
        initialValues: {
            receiver: '',
            description: '',
            city: '',
            zipCode: '',
            number: '',
            complement: '',
            name: '',
            cardNumber: '',
            code: '',
            month: '',
            year: ''
        },
        validationSchema: Yup.object({
            receiver: Yup.string()
                .min(5, 'O nome precisa ter pelo menos 5 caracteres')
                .required('O campo é obrigatório'),
            description: Yup.string().required('O campo é obrigatório'),
            city: Yup.string().required('O campo é obrigatório'),
            zipCode: Yup.string().required('O campo é obrigatório'),
            number: Yup.number().required('O campo é obrigatório'),
            name: Yup.string().required('O campo é obrigatório'),
            cardNumber: Yup.string()
                .min(19, 'O número do cartão deve ter 16 dígitos')
                .required('O campo é obrigatório'),
            code: Yup.string()
                .min(3, 'O CVV deve ter 3 dígitos')
                .required('O campo é obrigatório'),
            month: Yup.string()
                .min(2, 'Mês inválido')
                .required('O campo é obrigatório'),
            year: Yup.string()
                .min(2, 'Ano inválido')
                .required('O campo é obrigatório')
        }),
        onSubmit: (values) => {
            purchase({
                products: items.map((item) => ({
                    id: item.id,
                    price: item.preco
                })),
                delivery: {
                    receiver: values.receiver,
                    address: {
                        description: values.description,
                        city: values.city,
                        zipCode: values.zipCode,
                        number: Number(values.number),
                        complement: values.complement
                    }
                },
                payment: {
                    card: {
                        name: values.name,
                        number: values.cardNumber,
                        code: values.code,
                        expires: {
                            month: values.month,
                            year: values.year
                        }
                    }
                }
            })
        }
    })

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(clear())
        }
    }, [isSuccess, dispatch])

    const closeCart = () => {
        dispatch(close())
        window.location.href = "/"
    }

    return (
        <>
            <S.Sidebar>
                {isSuccess && data ? (
                    <>
                        <h2>Pedido realizado - {data.orderId}</h2>
                        <p>
                            Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                        </p>
                        <p>
                            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                        </p>
                        <p>
                            Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                        </p>
                        <p>
                            Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                        </p>
                        <button type="button" onClick={closeCart}>
                            Concluir
                        </button>
                    </>
                ) : (
                    <>
                        {paymentStep === false ? (
                            <>
                                <h2>Entrega</h2>
                                <S.Form onSubmit={form.handleSubmit}>
                                    <S.InputGroup>
                                        <label htmlFor="receiver">Quem irá receber?</label>
                                        <input type="text" className={checkInputHasError("receiver") ? "error" : ""} name="receiver" value={form.values.receiver} onChange={form.handleChange} onBlur={form.handleBlur} id="receiver" />
                                    </S.InputGroup>
                                    <S.InputGroup>
                                        <label htmlFor="description">Endereço</label>
                                        <input type="text" className={checkInputHasError("description") ? "error" : ""} name="description" value={form.values.description} onChange={form.handleChange} onBlur={form.handleBlur} id="description" />
                                    </S.InputGroup>
                                    <S.InputGroup>
                                        <label htmlFor="city">Cidade</label>
                                        <input type="text" className={checkInputHasError("city") ? "error" : ""} name="city" value={form.values.city} onChange={form.handleChange} onBlur={form.handleBlur} id="city" />
                                    </S.InputGroup>
                                    <S.TwoInputsForRow>
                                        <S.InputGroup>
                                            <label htmlFor="zipCode">CEP</label>
                                            <InputMask mask="99999-999" type="text" className={checkInputHasError("zipCode") ? "error" : ""} name="zipCode" value={form.values.zipCode} onChange={form.handleChange} onBlur={form.handleBlur} id="zipCode" />
                                        </S.InputGroup>
                                        <S.InputGroup>
                                            <label htmlFor="number">Número</label>
                                            <input type="text" className={checkInputHasError("number") ? "error" : ""} name="number" value={form.values.number} onChange={form.handleChange} onBlur={form.handleBlur} id="number" />
                                        </S.InputGroup>
                                    </S.TwoInputsForRow>
                                    <S.InputGroup>
                                        <label htmlFor="complement">Complemento (opcional)</label>
                                        <input type="text" name="complement" value={form.values.complement} onChange={form.handleChange} onBlur={form.handleBlur} id="complement" />
                                    </S.InputGroup>
                                    <S.ButtonsGroup>
                                        <button type="button" onClick={() => setPaymentStep(true)}>Continuar para pagamento</button>
                                        <button type="button" onClick={onClick}>
                                            Voltar para o carrinho
                                        </button>
                                    </S.ButtonsGroup>
                                </S.Form>
                            </>
                        ) : (
                            <>
                                <h2>Pagamento - Valor a pagar {formataPreco(totalPrice)}</h2>
                                <S.Form onSubmit={form.handleSubmit}>
                                    <S.InputGroup>
                                        <label htmlFor="cardName">Nome no cartão</label>
                                        <input type="text" className={checkInputHasError("name") ? "error" : ""} name="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} id="cardName" />
                                    </S.InputGroup>
                                    <S.TwoInputsForRow>
                                        <S.InputGroup maxWidth="228px">
                                            <label htmlFor="cardNumber">Número do cartão</label>
                                            <InputMask mask="9999 9999 9999 9999" id="cardNumber" type="text" className={checkInputHasError("cardNumber") ? "error" : ""} name="cardNumber" value={form.values.cardNumber} onChange={form.handleChange} onBlur={form.handleBlur} />
                                        </S.InputGroup>
                                        <S.InputGroup maxWidth="87px">
                                            <label htmlFor="code">CVV</label>
                                            <InputMask mask="999" id="code" type="text" className={checkInputHasError("code") ? "error" : ""} name="code" value={form.values.code} onChange={form.handleChange} onBlur={form.handleBlur} />
                                        </S.InputGroup>
                                    </S.TwoInputsForRow>
                                    <S.TwoInputsForRow>
                                        <S.InputGroup>
                                            <label htmlFor="month">Mês de vencimento</label>
                                            <InputMask mask="99" id="month" type="text" className={checkInputHasError("month") ? "error" : ""} name="month" value={form.values.month} onChange={form.handleChange} onBlur={form.handleBlur} />
                                        </S.InputGroup>
                                        <S.InputGroup>
                                            <label htmlFor="year">Ano de vencimento</label>
                                            <InputMask mask="99" id="year" type="text" className={checkInputHasError("year") ? "error" : ""} name="year" value={form.values.year} onChange={form.handleChange} onBlur={form.handleBlur} />
                                        </S.InputGroup>
                                    </S.TwoInputsForRow>
                                    <S.ButtonsGroup>
                                        <button type="submit">
                                            {isLoading ? "Processando..." : "Finalizar pagamento"}
                                        </button>
                                        <button type="button" onClick={() => setPaymentStep(false)}>
                                            Voltar para a edição de endereço
                                        </button>
                                    </S.ButtonsGroup>
                                </S.Form>
                            </>
                        )}
                    </>
                )}
            </S.Sidebar>
        </>
    )
}
