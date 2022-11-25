const ClockDisplayAnalog = (props: any) => {
    const sati = props.sati;
    const minute = props.minute;
    const sekunde = props.sekunde;

    const ugaoSekunde = (360/60)*sekunde;
    const ugaoMinute = (360/60)*minute;
    const ugaoSati = (360/12)*sati;



    return (
        <div className="analog-clock-widget">
            <div className="clock-circle-bg">

                <div className="nosac-kazaljke" style={{
                    transform: 'rotate(' + ugaoSati + 'deg)'
                }}>
                    <div className="kazaljka-sati"></div>
                </div>

                <div className="nosac-kazaljke" style={{
                    transform: 'rotate(' + ugaoMinute + 'deg)'
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