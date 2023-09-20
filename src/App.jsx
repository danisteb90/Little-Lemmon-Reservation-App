
function App() {

  return (
    <>
      <main>
        <div>{/*Div for the spices background*/}</div>
        <header>
          <img />
          <nav>
            <ul>
              <li><a>Menu</a></li>
              <li><a>Events</a></li>
              <li><a>Order Online</a></li>
              <li><a>Contact</a></li>
              <li>Login<a></a></li>
            </ul>
          </nav>
          <button>Reserve a Table</button>
        </header>
        <section>
          <div>{/*Left Div*/}
            <h1>Italian Flavor</h1>
            <h2>Exceptional Experience</h2>
            <p>Indulge in the rich flavors of Italy at our restaurant. Savor authentic Italian cuisine, handcrafted with passion, and enjoy a memorable dining experience with us.</p>
            <div>
              <button>Menu</button>
              <button>Reserve a Table</button>
            </div>
            <div>
              <img />
              <img />
              <img />
            </div>
          </div>
          <div>{/*Right Div*/}
            <img />
            <img />
          </div>
        </section>
        <section>
          {/*Include 3 card co mponents with images and text*/}
          <button>Order Online</button>
        </section>
        <section>
          {/*Include a carrousel with cards for costumer testimonials*/}
        </section>
      </main>
      <footer>
        <img />
        <nav>
          <ul>
            <li><a>Menu</a></li>
            <li><a>Events</a></li>
            <li><a>Order Online</a></li>
            <li><a>Contact</a></li>
            <li>Login<a></a></li>
          </ul>
        </nav>
        <article>
          <h2>Open Hours</h2>
          <section>
            <div>
              <h3>Monday - Friday</h3>
              <p>8:00 AM - 9:00 PM</p>
              <hr />
            </div>
            <div>
              <h3>Saturday</h3>
              <p>8:00 AM - 9:00 PM</p>
              <hr />
            </div>
            <div>
              <h3>Sunday</h3>
              <p>8:00 AM - 4:00 PM</p>
            </div>
          </section>
          <div>
            <h2>Follow Us</h2>
            <div>
              <img />
              <img />
              <img />
            </div>
          </div>
        </article>
        <p>2022 Restaurants. All Right Reserved. Designed by Esteban Alban</p>
      </footer>
    </>
  )
}

export default App
