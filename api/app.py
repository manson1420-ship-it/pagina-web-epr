from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from api.models import db, Videojuego
from datetime import datetime
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_pre_ping": True,
    "pool_recycle": 300
}

db.init_app(app)

@app.route("/api/videojuegos", methods=["GET"])
def inicio():
    videojuegos = Videojuego.query.all();
    return jsonify([v.to_dict() for v in videojuegos])

@app.route("/api/videojuegos", methods=["GET"])
def obtener_videojuegos():
    videojuegos = Videojuego.query.all()
    return jsonify([v.to_dict() for v in videojuegos])

@app.route("/api/videojuegos/<int:id>", methods=["GET"])
def obtener_videojuego(id):
    videojuego = Videojuego.query.get_or_404(id)
    return jsonify(videojuego.to_dict())

@app.route("/api/videojuegos", methods=["POST"])
def crear_videojuego():
    data = request.json

    nuevo_videojuego = Videojuego(
        titulo=data["titulo"],
        desarrollador=data["desarrollador"],
        fecha_lanzamiento=datetime.strptime(
            data["fecha_lanzamiento"], "%Y-%m-%d"
        ).date()
    )

    db.session.add(nuevo_videojuego)
    db.session.commit()

    return jsonify(nuevo_videojuego.to_dict()), 201

@app.route("/api/videojuegos/<int:id>", methods=["PUT"])
def actualizar_videojuego(id):
    videojuego = Videojuego.query.get_or_404(id)
    data = request.json

    videojuego.titulo = data["titulo"]
    videojuego.desarrollador = data["desarrollador"]
    videojuego.fecha_lanzamiento = datetime.strptime(
        data["fecha_lanzamiento"], "%Y-%m-%d"
    ).date()

    db.session.commit()

    return jsonify(videojuego.to_dict())

@app.route("/api/videojuegos/<int:id>", methods=["DELETE"])
def eliminar_videojuego(id):
    videojuego = Videojuego.query.get_or_404(id)

    db.session.delete(videojuego)
    db.session.commit()

    return jsonify({"mensaje": "Videojuego eliminado correctamente"})

#with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)