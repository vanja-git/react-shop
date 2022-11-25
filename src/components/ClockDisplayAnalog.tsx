const ClockDisplayAnalog = (props: any) => {
    const sati = props.sati;
    const minute = props.minute;
    const sekunde = props.sekunde;

    const ugaoSekunde = (360/60)*sekunde; // sekunde grubi ugao

    const ugaoMinute = (360/60)*minute; // minute grubi ugao
    const minuteGlatke = minute + (sekunde/60);
    const ugaoMinuteGlatke = (360/60)*minuteGlatke; //  minute glatki ugao

    const ugaoSati = (360/12)*sati; // sati grubo ugao (0, 1, 2 ittd.)
    const satiGlatki = sati + (minute / 60);
    const ugaoSatiGlatki = (360/12)*satiGlatki; // sati glatki ugao (0, 0.01, 0.2, 0.5)

    let jsxSezdesetCrtica:any = [];
    for (let s = 0; s <= 59; s++) {
        const ugao=(360/60)*s;
        jsxSezdesetCrtica.push(
            (
                <div key={s} className="nosac-kazaljke" style={{
                    transform: 'rotate(' + ugao + 'deg)'
                }}>
                    <div className="crtica-sekunde"></div>
                </div>
            )
        );
    }

    let jsxDvanaestCrtica:any = [];
    for (let d = 0; d<=11; d++) {
        const ugao=(360/12)*d;
        jsxDvanaestCrtica.push(
            (
                <div key={d} className="nosac-kazaljke" style={{
                    transform: 'rotate(' + ugao + 'deg)'
                }}>
                    <div className="crtica-sati"></div>
                </div>
            )
        )
    }



    return (
        <div className="analog-clock-widget">
            <div className="clock-circle-bg">

                {jsxSezdesetCrtica}
                {jsxDvanaestCrtica}

                <div className="nosac-kazaljke" style={{
                    transform: 'rotate(' + ugaoSatiGlatki + 'deg)'
                }}>
                    <div className="kazaljka-sati"></div>
                </div>


                <div className="nosac-kazaljke" style={{
                    transform: 'rotate(' + ugaoMinuteGlatke + 'deg)'
                }}>
                    <div className="kazaljka-minute"></div>
                </div>



                <div className="nosac-kazaljke" style={{
                    transform: 'rotate(' + ugaoSekunde + 'deg)'
                }}>
                    <div className="kazaljka-sekunde"></div>
                </div>


            </div>
        </div>

    );
};

export default ClockDisplayAnalog;