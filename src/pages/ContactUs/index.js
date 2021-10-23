import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.scss";

const ContactUs = () => {
  return (
    <Grid container className="contact-us">
      <Grid container item md={10} className="contact-us__breadcrumb">
        <span>
          <Link to="/">Home</Link> / Contact Us
        </span>
      </Grid>
      <Grid container item md={10}>
        <Grid item md={6} className="contact-us__message">
          <h1>Contact Us</h1>
          <p>
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram anteposuerit litterarum formas human. qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam
          </p>
          <ul>
            <li>
              <i className="bx bx-map"></i>
              <span> Address : No 40 Baria Sreet 133/2 NewYork City</span>
            </li>
            <li>
              <i className="bx bx-phone"></i> <Link>Infor@roadthemes.com</Link>
            </li>
            <li>
              <i className="bx bx-mail-send"></i>
              <span>0(1234) 567 890</span>
            </li>
          </ul>
        </Grid>
        <Grid item md={6} className="contact-us__form">
          <h1>Tell Us Your Project</h1>
          <Box component="div">
            <label>Your Name (required)</label>
            <input type="text" placeholder="Name*" />
          </Box>
          <Box component="div">
            <label>Your Email (required)</label>
            <input type="text" placeholder="Email*" />
          </Box>
          <Box component="div">
            <label>Subject</label>
            <input type="text" placeholder="Subject*" />
          </Box>
          <Box component="div">
            <label>Your Message</label>
            <textarea type="text" placeholder="Message*" />
          </Box>
          <button>SEND</button>
        </Grid>
      </Grid>
      <Grid container item md={12} className="map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.977854491255!2d105.8019440915678!3d21.022736016285606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1630478456152!5m2!1svi!2s"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
