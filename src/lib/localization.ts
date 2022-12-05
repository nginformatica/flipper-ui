import ptBRLocale from 'date-fns/locale/pt-BR'

export const getLocalization = (title = '') => ({
    body: {
        dateTimePickerLocalization: { locale: ptBRLocale },
        emptyDataSourceMessage: 'Não há dados para serem exibidos no momento',
        editRow: {
            saveTooltip: 'Salvar',
            cancelTooltip: 'Cancelar',
            deleteText: `Você tem certeza que deseja excluir esse ${
                title ?? 'item'
            }?`
        },
        addTooltip: `Adicionar ${title}`,
        deleteTooltip: `Remover ${title}`,
        editTooltip: `Editar ${title}`
    },
    header: { actions: '' },
    pagination: {
        firstTooltip: 'Primeira',
        firstAriaLabel: 'Primeira',
        previousTooltip: 'Anterior',
        previousAriaLabel: 'Anterior',
        nextTooltip: 'Próxima',
        nextAriaLabel: 'Próxima',
        lastTooltip: 'Ultima',
        lastAriaLabel: 'Ulima',
        labelRowsSelect: 'Linhas',
        labelDisplayedRows: '{from}-{to} de {count}'
    }
})
