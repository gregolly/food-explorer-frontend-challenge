import { Minus } from './components/Minus'
import { Plus } from './components/Plus'
import { Favorite } from './components/Favorite'

import { Button } from '../../../Button'
import dish from '../../../../assets/spaguetti-gambe.png'

import { CardWrapper, Wrapper } from "./styles"
import { Link } from 'react-router-dom'

export const Card = () => {
    return (
        <CardWrapper>
            <button className='wrapperFavorite'>
                <Favorite />
            </button>
            <Link>
                <img src={dish} alt="" />
                <h3>Spaguetti Gambe</h3>
                <p>Massa fresca com camarões e pesto. </p>
            </Link>
            <span className='price'>R$ 79,97</span>
            <Wrapper>
                <div>
                    <button>
                        <Minus />
                    </button>
                    <span>01</span>
                    <button>
                        <Plus />
                    </button>
                </div>
                <Button>Incluir</Button>
            </Wrapper>
        </CardWrapper>
    )
}