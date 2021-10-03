import { useState, useEffect, FunctionComponent } from 'react';

interface Props {
    rgb: number[];
    weight: number;
    index: number;
    hexColor: string | undefined;
}

const SingleColor: FunctionComponent<Props> = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',')
    //const hexadecimal = rgbToHex(rgb[0], rgb[1], rgb[2])
    const hexValue = `#${hexColor}`

    useEffect(() => {
        const timeout = setTimeout(() => setAlert(false), 3000)
        return () => clearTimeout(timeout)
    }, [alert]);

    return <article
        className={`color`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
            setAlert(true)
            navigator.clipboard.writeText(hexValue)
        }}
    >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && <p className="alert">Copied to clipboard</p>}
    </article>
}

export default SingleColor