import team from '../../assets/image/team.jpg'
const ExtraPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={team}
            className="h-full w-full rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Meet Our Team</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraPage;
