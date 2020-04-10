interface IData {
    data: { [key: string]: any }[]
}

export default ({ data }: IData) => data.map(element => ({
    keyword: element.keyword,
    suggestionsCount: element.suggestions_count,
    trafficScore: element.users_per_day,
    rank: element.position_info,
    totalApps: element.total_apps,
    color: element.color,
    remove: element.id,
}))
