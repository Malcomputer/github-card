import {Github, Globe2, JournalCode, PeopleFill, Twitter} from "react-bootstrap-icons";
import {Card} from "react-bootstrap";
import {useState} from "react";

function GithubCard(props) {
  const [user, setUser] = useState({});
  const [active, setActive] = useState(false);
  const fetchUser = () => fetch(`https://api.github.com/users/${props.username}`).then(res => res.json()).then(setUser).finally(() => setActive(true));
  const handleToggle = () => setActive(!active);
  return (
    <div className="GithubCard">
      <button className="btn btn-primary" onClick={fetchUser}>Fetch User</button>
      {!active && <button className="btn btn-primary" onClick={handleToggle}>Show</button>}
      {active && <button className="btn btn-primary" onClick={handleToggle}>Hide</button>}
      {active && <Card className="user" style={{width: '18rem', margin: '1.25rem auto'}}>
        <Card.Img variant="top" src={user.avatar_url}/>
        <Card.ImgOverlay className="card-overlay">
          {user.html_url && <a href={user.html_url} target="_blank" rel="noreferrer"><Github/></a>}
          {user.twitter_username && <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer"><Twitter/></a>}
          {user.blog && <a href={`https://${user.blog}`} target="_blank" rel="noreferrer"><Globe2/></a>}
        </Card.ImgOverlay>
        <Card.Body style={{padding: '1.25rem 0 0 0'}}>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.bio && user.bio}</Card.Text>
          <Card.Footer className="footer">
            <div className="icon-parent">
              <PeopleFill/>
              <small className="text-muted user-followers">{user.followers}</small>
              <small className="text-muted">Followers</small>
            </div>
            <div className="icon-parent">
              <JournalCode/>
              <small className="text-muted user-public-repo">{user.public_repos}</small>
              <small className="text-muted">Repositories</small>
            </div>
            <div className="icon-parent">
              <PeopleFill/>
              <small className="text-muted user-following">{user.following}</small>
              <small className="text-muted">Following</small>
            </div>
          </Card.Footer>
        </Card.Body>
      </Card>}
    </div>
  )
}

export default GithubCard;