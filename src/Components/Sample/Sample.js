
import styled from 'styled-components';
import MainScreen from '../LandingPage/MainScreen';
import Input from './Input';
import './Sample.css'


const CompanyName = styled(Input)`
padding: 20px;
width: 335px;
height:50px;
`;
const Amount = styled(Input)``;

const ItemsPurchased = styled(Input)``;

const Purpose = styled(Input)``;

const Others = styled(Input)`
width: 1478px;
`;

const Comments = styled(Input)`
width: 1478px;
`;


const PO_M_NEW = (props) => {
    return (
        // <div className='div1'>
        //     <div className='div2'>
                <MainScreen title="Miscellinous">
                    

                    <CompanyName
                        type="text"
                        fieldName="Company"
                        inputValue={[]}
                        label="Company Name"
                        required={true}

                    />

                    <ItemsPurchased
                        type="text"
                        fieldName="Items Purchased"
                        label="Items Purchased"
                        required={true}
                    />

                    <Purpose
                        type="text"
                        fieldName="Purpose"
                        label="Purpose"
                        required={true}
                    />

                    <Others
                        type="text"
                        fieldName="Others"
                        label="Others"
                        required={false}
                    />

                    <Amount
                        type="text"
                        fieldName="Amount Paid"

                        label="Amount Paid"
                        required={true}
                        disabled
                    />

                    <Comments
                        type="text"
                        fieldName="Comments"
                        label="Comments"
                        required={false}
                        width='100%'
                    />

                    <input type="checkbox"></input>
                    <span>
                        <label> Attach receipt</label>
                    </span>

                </MainScreen>
        //     </div>
        // </div>

    )
}

export default PO_M_NEW;
