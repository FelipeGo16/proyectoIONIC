from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/gps')
def gps():
    return render_template('gps.html')

@app.route('/camara')
def camara():
    return render_template('camara.html')

if __name__ == '__main__':
    app.run(debug=True)
