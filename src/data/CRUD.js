import { curday } from "./HelperFunctions";
import { Container, Row, Col } from "react-bootstrap";
import EditExpenseModal from "../components/EditExpenseModal";

export function saveData(category) {   

        if (localStorage.getItem('savedData') === undefined || localStorage.getItem('savedData') === null) {

            const blankArray = [];
            localStorage.setItem('savedData', JSON.stringify(blankArray));
        }
        

        let existingArray = JSON.parse(localStorage.getItem('savedData'));

        let user = JSON.parse(localStorage.getItem('user'));

        let newObject = {
            
            id: (existingArray.length + 1),
            amount: JSON.parse(localStorage.getItem("addExpense")),
            category: category,
            date: curday('-'),
            foreignCurrency: user.foreign,
            rate: JSON.parse(localStorage.getItem('conversionRate')),

        }

        const newArray = [...existingArray, newObject];

        localStorage.setItem('savedData', JSON.stringify(newArray));
}



export function ReadData(props) {

    if (localStorage.getItem('savedData') === undefined || localStorage.getItem('savedData') === null) {
      
        return (
          <Container>
              <Row>
                 <Col xs={12}>
                 <h4 className="claret-text big open-sans-condensed text-center">NO DATA YET!</h4>  
                </Col> 
              </Row>
          </Container>
        );

    }else {

    let originalArray = JSON.parse(localStorage.getItem('savedData'));    
    
    function filter_dates(date) {
          
          return originalArray.date == date;
          console.log(date);
        
        }    

    console.log(originalArray);
    console.log(originalArray[0].date)

    let filteredArray = originalArray.filter( data => props.date ? originalArray[i].date.includes(props.date) : false );

    filteredArray.map((data) => {
        
        return(
          
            <Container>    
               <Row>
               <Col xs={12}>
                  <div className="mx-auto mt-2 mb-2 text-center">
                     <h2 className="currency text-center jumbo">{data.amount}</h2>
                     <h4 className="claret-text big open-sans-condensed text-center">{data.category}</h4>
                     <h4 className="claret-text big text-center">{data.date}</h4>
                    </div> 
                   </Col>
                 </Row>   
                <EditExpenseModal />
            </Container>

          )
        }
       )

    }
}