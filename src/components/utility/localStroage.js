const getData = () => {
    const selectDataItem = localStorage.getItem('jobs-application')
    if (selectDataItem) {
        return JSON.parse(selectDataItem)
    }

    return [];
}


const savedData = (id) => {
    const getJobsData = getData();
    const isExist = getJobsData.find((jobId) => jobId == id);
    if (!isExist) {
        getJobsData.push(id)
        localStorage.setItem('jobs-application', JSON.stringify(getJobsData))
    }
}

export { getData, savedData }