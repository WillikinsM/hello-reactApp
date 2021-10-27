import "./index.scss";
import img from "../../assets/sanjis.png";
import { Link } from "react-router-dom";

const MyInfos = () => {
  return (
    <>
      <img className="img-sanji" src={img} alt="Sanji-One Piece" height="200" />
      <h1 className="my-name">Willikins Matheus Gonçalves Abreu</h1>
      <h4>
        <em>
          Hello my name is Willikins, i'm 21 year old and i was born in
          Florestopolis - PR
        </em>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis
        ligula quis urna gravida, quis varius libero lacinia. Integer
        scelerisque maximus nisi vel malesuada. Aenean euismod sem a elit luctus
        varius. Nulla in libero eget nisi aliquet auctor. Mauris mattis dui
        lorem, non elementum ipsum maximus et. Maecenas eu congue nisi. Praesent
        fringilla diam ac sem tristique sagittis. Mauris sed lacinia urna.
        Vivamus augue ligula, imperdiet eget nisl vel, fringilla suscipit lorem.
        Morbi non rutrum enim. In ut vulputate dolor, in sollicitudin ante.
        Donec ut dictum eros, at elementum sem. Donec sagittis libero urna, non
        ultricies erat commodo ac. Pellentesque sagittis elementum leo, ac
        gravida ante tempus a. Cras interdum feugiat posuere. Etiam varius
        consequat risus, ut laoreet massa cursus vel. Nullam et iaculis ex, ac
        viverra nulla. Pellentesque laoreet enim ut lacinia rhoncus. Nulla
        blandit ornare auctor. Curabitur quis neque quam. Phasellus sed
        porttitor dui. Nulla at dolor tincidunt, dignissim enim rutrum, dapibus
        metus. Aliquam mi justo, semper molestie maximus id, auctor non arcu.
        Duis quis odio facilisis, aliquet neque sit amet, vehicula tellus.
        Aliquam leo arcu, tristique vel pretium sit amet, vestibulum ultrices
        eros. Proin vehicula id neque eu congue. Phasellus accumsan metus neque,
        eget mattis arcu fringilla sit amet. Aenean luctus cursus quam at
        vehicula. Fusce a aliquam velit. Nullam elit dolor, tincidunt eu
        vestibulum ac, ornare non neque. Integer eget purus eros. Nullam non
        purus diam. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Sed vitae lorem quam. Mauris lacinia sem justo. Sed eu
        placerat velit, at maximus justo. Phasellus gravida vel diam quis
        maximus. Praesent libero arcu, scelerisque id est eget, ornare pharetra
        erat. Nullam quis metus mi. Morbi rutrum lacus quis risus pretium
        tincidunt. Pellentesque vitae tortor laoreet, faucibus dui in,
        scelerisque quam. Sed rhoncus libero libero, in ultrices erat fringilla
        vitae. Ut a ornare velit. Nullam gravida in diam eu vulputate. Duis
        euismod orci vitae nibh suscipit convallis. Etiam vel neque et massa
        pretium ultrices. Phasellus arcu neque, iaculis finibus lobortis vel,
        tristique non mauris. Ut auctor rhoncus suscipit. Duis nisl justo,
        pellentesque a aliquet vel, maximus nec elit. Vivamus porta efficitur
        ante. In hac habitasse platea dictumst.
      </h4>
      <Link type="button" className="btn btn-dark" to="/">
        Go to Home Page
      </Link>
    </>
  );
};

export default MyInfos;