import {
    MenuItem
} from 'material-ui';

export function menuItem(key, value, text) {
    return <MenuItem value={value} key={key} primaryText={text}/>
}

/*
 * @param transformer - function converted row => String
 * @param row - some DB object projection which contains id: {id: 1} and has constructor
 */
export function autoCompleteItem(transformer, row) {
    const t = transformer(row);
    const key = `${row.constructor.name.toLowerCase()}-${row.id}`;
    return {
        text: t,
        value: menuItem(key, row.id, t),
        row: row
    }
}

export function aircraft2str(a) {
    return a ? a.toString() : a;
}

export function airport2str(a) {
    return a ? a.toString() : a;
}

export function airport2longStr(a) {
    return a ? a.toLongString() : a;
}

export function date2str(d) {
    if (d && d instanceof Date) {
        const dd = d.getDate();
        const mm = d.getMonth() + 1;

        return `${dd >= 10 ? dd : "0" + dd}/${mm >= 10 ? mm : "0" + mm}/${d.getFullYear()}`
    } else
        return d
}

export function hhmm2str(d) {
    if (d && d instanceof Date) {
        const hh = d.getHours();
        const mm = d.getMinutes() + (d.getSeconds > 30 ? 1 : 0);

        return `${hh >= 10 ? hh : "0" + hh}:${mm >= 10 ? mm : "0" + mm}`
    } else
        return d
}

export function normFiltersList(filters) {
    const filtered = filters && filters.size > 0 ? filters.filter(
        (v) => {
            return v.value !== undefined
        }
    ).toArray() : [];

    return filtered.map(
        (v) => {
            const val = v.value;

            if (val instanceof Date) {
                return {
                    ...v,
                    value: date2str(val)
                }
            } else {
                const {id} = val;
                if (id) {
                    return {
                        ...v,
                        value: id
                    }
                } else
                    return v
            }
        }
    )
}