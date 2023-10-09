import Navbar from "../../SharedComponents/Header/Navbar";
import Footer from "../Footer/Footer";


const Contact = () => {
  return (
    <div>
     <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Your Office Location?</h1>

            <div className="py-6 px-8">
              <iframe
                allowFullScreen="true"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48374.500167775266!2d-74.03076709215425!3d40.731085308288435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAve%20Street%2C%20New%20York%2C%20USA!5e0!3m2!1sen!2sit!4v1685611807425!5m2!1sen!2sit"
                width="600"
              ></iframe>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-5">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Your FeedBack</span>
                </label>
                <textarea
                 rows="8" cols="50"
                 id="w3review" name="w3review"
                  placeholder="Your Feedback"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Feedback</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
