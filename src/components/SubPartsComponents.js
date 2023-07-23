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
import { ReactComponent as Shirt1 } from '../assets/img/clothes/clothes29-1.svg'
import { ReactComponent as Ribbon1 } from '../assets/img/accessoriesA/accessoriesA3-1.svg'
import { ReactComponent as Offshoulder1 } from '../assets/img/clothes/clothes12-1.svg'
import { ReactComponent as Necktie1 } from '../assets/img/clothes/clothes18-1.svg'
import { ReactComponent as Blazer1 } from '../assets/img/clothes/clothes22-1.svg'
import { ReactComponent as AngelWing1 } from '../assets/img/accessoriesB/accessoriesB1-1.svg'
import { ReactComponent as Thorn1 } from '../assets/img/accessoriesA/accessoriesA15-1.svg'
import { ReactComponent as Mask1 } from '../assets/img/accessoriesA/accessoriesA16-1.svg'
import { ReactComponent as DevilWing1 } from '../assets/img/accessoriesB/accessoriesB4-1.svg'

const subParts = {
    defaultTwintail: (color) => <DefaultHair fill={color} className='svgParts' />,
    heihachiHair: (color) => <HeihachiHair fill={color} className='svgParts' />,
    bobHair: (color) => <BobHair fill={color} className='svgParts' />,
    shortcutHair: (color) => <ShorcutHair fill={color} className='svgParts' />,
    curledBobHair: (color) => <CurledBobHair fill={color} className='svgParts' />,
    seeThroughBang: (color) => <SeeThroughBangHair fill={color} className='svgParts' />,
    longHairA: (color) => <LongHairA fill={color} className='svgParts' />,
    longHairB: (color) => <LongHairB fill={color} className='svgParts' />,
    lip: (color) => <Lip fill={color} className='svgParts' />,
    circleLens: (color) => <CircleLens fill={color} className='svgParts' />,
    dress: (color) => <Dress fill={color} className='svgParts' />,
    baseballJumper1: (color) => <BaseballJumper1 fill={color} className='svgParts' />,
    baseballJumper2: (color) => <BaseballJumper2 fill={color} className='svgParts' />,
    shirt1: (color) => <Shirt1 fill={color} className='svgParts' />,
    ribbon1: (color) => <Ribbon1 fill={color} className='svgParts' />,
    offShoulder1: (color) => <Offshoulder1 fill={color} className='svgParts' />,
    necktie1: (color) => <Necktie1 fill={color} className='svgParts' />,
    blazer1: (color) => <Blazer1 fill={color} className='svgParts' />,
    angelwing1: (color) => <AngelWing1 fill={color} className='svgParts' />,
    thorn1: (color) => <Thorn1 fill={color} className='svgParts' />,
    mask1: (color) => <Mask1 fill={color} className='svgParts' />,
    devilwing1: (color) => <DevilWing1 fill={color} className='svgParts' />,
  }

export default subParts