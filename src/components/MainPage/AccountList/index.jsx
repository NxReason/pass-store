import './styles.css';

const accounts = [
  { account: 'gmail', name: 'arsiddde@gmail', pass: 'donttellanybody' },
  { account: 'gmail', name: 'rsx@gmail.com', pass: 'donttellanybody' },
  { account: 'gmail', name: 'rsx@gmail.com', pass: 'donttellanybody' },
  { account: 'gmail', name: 'rsx@gmail.com', pass: 'donttellanybody' },
  { account: 'gmail', name: 'rsx@gmail.com', pass: 'donttellanybody' },
  { account: 'gmail', name: 'rsx@gmail.com', pass: 'donttellanybody' },
  { account: 'gmail', name: 'rsx@gmail.com', pass: 'donttellanybody' },
  { account: 'gmail', name: 'rsx@gmail.com', pass: 'donttellanybody' },
];

export default function AccountList() {
  return (
    <div className="account-list">
      <For each={accounts}>{acc => <AccountCard {...acc} />}</For>
    </div>
  );
}

function AccountCard(props) {
  return (
    <div className="account-card">
      <div className="account-card-title">
        <h3 title={props.account}>{props.account}</h3>
        <span className="ac-title-icons">
          <i className="icon icon-edit"></i>
          <i className="icon icon-remove"></i>
        </span>
      </div>
      <div className="account-card-info">
        <p className="ac-field" title={props.name}>
          <i className="icon icon-user"></i>
          {props.name}
        </p>
        <p className="ac-field" title={props.pass}>
          <i className="icon icon-key"></i>
          {props.pass}
        </p>
      </div>
    </div>
  );
}
