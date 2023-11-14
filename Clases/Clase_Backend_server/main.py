from flask import Flask, jsonify, request

app = Flask(__name__)


productos = [
    {"nombre": "tensiometro", "stock": 5},
    {"nombre": "termo", "stock": 15},
    {"nombre": "ibu", "stock": 500},
    {"nombre": "paracetamol", "stock": 450},
]

#ver todos los productos
@app.route('/productos', methods=['GET'])
def productosGet():
    return jsonify({"productos": productos, "status": "ok"})

#ver la info del producto que busquemos
@app.route('/productos/<producto>', methods=['GET'])
def productoGet(producto):
    for p in productos:
        if p["nombre"] == producto:
            return jsonify({"producto": p, "busqueda": producto, "status": "ok"})
    return jsonify({"busqueda": producto, "status": "not found"})

#subir un nuevo producto
@app.route('/productos', methods=['POST'])
def productoPost():
    body = request.json 
    nombre = body["nombre"]
    stock =body["stock"]
    productoAlta = {"nombre": nombre, "stock": stock}
    productos.append(productoAlta)
    return jsonify({"productos": productoAlta, "status": "ok"})

if __name__ == '__main__':
    app.run(debug=True, port=4000)