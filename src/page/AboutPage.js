import { Outlet } from "react-router-dom"
import { DetailLinkAbout } from "../components/DetailLinkAbout/DetailLinkAbout"

export const AboutPage = () => {
    return(
    <section>
        <h1>About us:</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam placeat, nostrum corporis at deleniti qui explicabo provident quia non quas quod repudiandae, pariatur itaque vel doloremque asperiores sunt! Expedita placeat, praesentium, deserunt eius numquam ad corrupti illum, hic vero officia laudantium? Hic repudiandae similique accusamus eaque nobis necessitatibus, dicta ullam numquam repellendus voluptatum eum temporibus itaque officia quia iusto. Optio, id ea atque minus odit porro aperiam. Cumque dicta obcaecati corporis est ducimus commodi maxime totam placeat fugiat tempora at cum blanditiis aliquid libero distinctio, voluptate tempore vero sequi dolorum iste dolores iusto laboriosam, reiciendis adipisci. Modi sunt iusto exercitationem? Hic quaerat, iusto esse eaque fugiat atque itaque ullam sapiente reiciendis ducimus quisquam magni explicabo error? Minus doloremque fuga aliquid, sed eaque odio saepe nisi vitae culpa eligendi voluptatum dolor facere obcaecati cupiditate, ex voluptate harum numquam. Ex cupiditate dolore inventore accusantium quaerat reiciendis totam. Vero excepturi tenetur ex eos quae, aperiam impedit dignissimos rerum iusto nesciunt, suscipit blanditiis expedita nostrum adipisci dolorum est, molestiae provident aut modi eius ipsam nulla illum. Distinctio ex odit facere porro nihil beatae vel obcaecati dolorem voluptas, voluptate consequatur a quam aliquam placeat doloremque quis earum fugiat similique eos? Soluta rem velit mollitia eos?</p>
        <DetailLinkAbout/>
        <div>
            <Outlet/>
        </div>
    </section>
    )
}