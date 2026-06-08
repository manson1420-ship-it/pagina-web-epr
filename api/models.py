from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Videojuego(db.Model):
    __tablename__ = "VideojuegosTabla"

    id = db.Column(db.BigInteger, primary_key=True)
    titulo = db.Column(db.Text, nullable=False)
    desarrollador = db.Column(db.Text, nullable=False)
    fecha_lanzamiento = db.Column("fechaLanzamiento", db.Date, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            "desarrollador": self.desarrollador,
            "fecha_lanzamiento": self.fecha_lanzamiento.isoformat()
        }