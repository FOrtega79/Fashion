import { Container } from "@mui/material"
import Beadcrum from "../../components/Beadcrum/Beadcrum"
import AllItems from "../../components/ItemsList/ItemList"



function AllItemsPage() {

    return(
        <section>
            <Beadcrum />
                <Container>
                 <h2>All Products...</h2>
                 <AllItems />
                 </Container>
        </section>
    )


}

export default AllItemsPage