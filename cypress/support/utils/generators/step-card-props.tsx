import { ifElse } from 'ramda'
import { IStepCardProps } from '../../../../src/core/StepCard'
import { StepCardVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'

const generate = (
    props: IStepCardProps
): Record<StepCardVariant, IStepCardProps> => ({
    default: props,
    'without-expansion': {
        ...props,
        showBottomPercentage: false,
        expandable: false,
        showIcon: false,
        title: 'Conheça mais sobre o Quírons',
        subTitle:
            'Siga os passos recomendados para uma melhor experiência ' +
            'dentro da plataforma.',
        summary: 'Seu progresso'
    }
})

const DEFAULT: IStepCardProps = {
    summary: '%i passos restantes - Leva %i minuto(s)',
    time: 2,
    percentage: 50,
    remainingSteps: 3,
    title: 'Configurar a organização e filial',
    image: 'https://dummyimage.com/130x124/000/fff',
    onStepUrlClick: (url: string) => alert(url),
    steps: [
        {
            title: 'Informar Razão social',
            done: true,
            url: 'https://www.google.com'
        },
        {
            title: 'Informar dados do eSocial',
            done: true,
            url: 'https://www.google.com'
        },
        {
            title: 'Informar dados da filial(CNAE, CNPJ)',
            done: false,
            url: 'https://www.google.com'
        }
    ]
}

const { default: defProps, 'without-expansion': withoutExpansion } =
    generate(DEFAULT)

export const StepCardPropsGenerator = (
    preset: StepCardVariant
): IStepCardProps => {
    const validate = (variant: StepCardVariant) =>
        validator<StepCardVariant>(variant)

    return ifElse(
        validate('without-expansion'),
        () => withoutExpansion,
        () => defProps
    )(preset)
}
