import { ReactComponent as DefaultHair } from '../assets/img/hairs/hairs1-1.svg'
import { ReactComponent as HeihachiHair} from '../assets/img/hairs/hairs4-1.svg'
import { ReactComponent as BobHair } from '../assets/img/hairs/hairs6-1.svg'
import { ReactComponent as ShorcutHair } from '../assets/img/hairs/hairs10-1.svg'
import { ReactComponent as CurledBobHair } from '../assets/img/hairs/hairs12-1.svg'
import { ReactComponent as SeeThroughBangHair } from '../assets/img/hairs/hairs13-1.svg'
import { ReactComponent as LongHairA } from '../assets/img/hairs/hairs14-1.svg'
import { ReactComponent as LongHairB } from '../assets/img/hairs/hairs15-1.svg'
import { ReactComponent as Lip } from '../assets/img/makeup/makeup1-1.svg'
import { ReactComponent as CircleLens } from '../assets/img/makeup/makeup18-1.svg'
import { ReactComponent as Dress } from '../assets/img/clothes/clothes4-1.svg'
import { ReactComponent as BaseballJumper1 } from '../assets/img/clothes/clothes13-1.svg'
import { ReactComponent as BaseballJumper2 } from '../assets/img/clothes/clothes13-2.svg'

const subParts = {
    defaultTwintail: (color) => <DefaultHair fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    heihachiHair: (color) => <HeihachiHair fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    bobHair: (color) => <BobHair fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    shortcutHair: (color) => <ShorcutHair fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    curledBobHair: (color) => <CurledBobHair fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    seeThroughBang: (color) => <SeeThroughBangHair fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    longHairA: (color) => <LongHairA fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    longHairB: (color) => <LongHairB fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    lip: (color) => <Lip fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    circleLens: (color) => <CircleLens fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    dress: (color) => <Dress fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    baseballJumper1: (color) => <BaseballJumper1 fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
    baseballJumper2: (color) => <BaseballJumper2 fill={color} style={{ position: "absolute", left: 0, top: 0 }} />,
  }

export default subParts