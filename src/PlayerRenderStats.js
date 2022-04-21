import axios from 'axios'
import Button from 'react-bootstrap/Button';

export function myComponent (sammyBlais) {
    const [myData, setMyData] = useState(null)
  
    const getData = async () =>{
      let returnedData = await sammyBlais()
      setMyData(returnedData )
    }
  
  useEffect(() => {
    getData()
  }, [])

return (
    <div>
      {
        myData.map(arrayMember => {
            return (
                <div>
                   {arrayMember}
                 </div>
              )
         })
      }
    </div>
  )
    
  }

 