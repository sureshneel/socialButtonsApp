const Button = (props) => {
  //  Write your code here.
  const { children, className } = props;
  return <button className={className}>{children}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-container">
    <h1 className="social-heading">Social Buttons</h1>
    <div className="social-buttons-card">
      <Button children="Like" className="btn1" />
      <Button children="Comment!" className="btn2" />
      <Button children="Share" className="btn3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
