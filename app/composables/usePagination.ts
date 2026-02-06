
/*pour que soit en état local: 
    export const UsePagination = () => {
    const nbrPages = ref (0)
    const currentPage = ref (0)

    const updatePage=(value) => {
        currentPage.value=value
    }

    return {
        nbrPages,
        currentPage,
        updatePage
    }
}
*/
/*pour que soit en état global:
    const nbrPages = ref (0)
    const currentPage = ref (0)
    export const UsePagination = () => {
    const updatePage=(value) => {
        currentPage.value=value
    }

    return {
        nbrPages,
        currentPage,
        updatePage
    }
}
*/