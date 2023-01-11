const App = () => (
    <div>
        <h2> Part 1 </h2>
        <FirstComponent />
        <NamedComponent name="Steve" />
        <h2> Part 2 </h2>
        <Tweet username='testuser' name='Mr. Test' date='today' message='This is a test tweet' />
        <Tweet username='coltsteele' name='Colt' date='yesterday' message='We are learning React tomorrow!' />
        <Tweet username='stevieb' name='Stevie' date='today' message='I am learning React today!' />
        <h2> Part 3 </h2>
        <Person age={4} name="Kevin" hobbies={["playing in the mud", "screeching", "finger painting"]} />
        <Person age={35} name="Super Long Name" hobbies={["playing chess", "eating cheese"]} />
        <Person age={18} name="Tanisha" hobbies={["singing"]} />

    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))