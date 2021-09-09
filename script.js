function Button(props) {
  return <input type={props.type} name="" id="" value={props.value} />;
}

function App() {
  return (
    <div className="calc">
      <header className="">
        <h3>calc</h3> 
        
        <form>
          <h6>THEME</h6>
          <div>
            <label></label>
          </div>
        </form>
      </header>
      <div className="calc-display">
        <Button type="text" />
      </div>

      <div className="calc-input">
        <Button type="button" value="7" className="" />
        <Button type="button" value="8" className="" />
        <Button type="button" value="9" className="" />
        <Button type="button" value="DEL" className="" />
        <Button type="button" value="4" className="" />
        <Button type="button" value="5" className="" />
        <Button type="button" value="6" className="" />
        <Button type="button" value="+" className="" />
        <Button type="button" value="1" className="" />
        <Button type="button" value="2" className="" />
        <Button type="button" value="3" className="" />
        <Button type="button" value="-" className="" />
        <Button type="button" value="." className="" />
        <Button type="button" value="0" className="" />
        <Button type="button" value="/" className="" />
        <Button type="button" value="*" className="" />
        <Button type="button" value="RESET" className="" />
        <Button type="button" value="=" className="" />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);