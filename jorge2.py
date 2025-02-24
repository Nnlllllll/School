from qiskit import QuantumCircuit, Aer, execute

qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0,1)

simulador = Aer.get_backend('qasm_simulator')
result = execute(qc,simulador).result()
counts = result.get_counts()

print("Contagens de medidas:", counts)