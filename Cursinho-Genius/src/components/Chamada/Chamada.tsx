// import React, { useState } from 'react';  
// import "./Chamada.css"  

// type Aluno = {
//     id: number;
//     nome: string;
//     cpf: string;
//     status: boolean;
//   };  

// const Chamada = () => {
//     const [alunos, setAlunos] = useState<Aluno[]>([]);

//     return (
//         <div className="chamada-container">
//         <h1 className="titulo-chamada">Chamada</h1>
//         <p className="sub-titulo-chamada">Desmarque os <b>alunos ausentes</b> e finalize a chamada</p>
//         <div className="tabela-container">
//         <table className="chamada-tabela">
//             <thead className= "cabecario-tabela">
//                 <tr>
//                     <th>Nome</th>
//                     <th>CPF</th>
//                     <th>Status</th>
//                 </tr>
//             </thead>
//             <tbody className="corpo-tabela">
//               <tr>
//       <td>João</td>
//       <td>25</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Ana</td>
//       <td>30</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Carlos</td>
//       <td>22</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Maria</td>
//       <td>28</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Pedro</td>
//       <td>35</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Fernanda</td>
//       <td>40</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Lucas</td>
//       <td>29</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Beatriz</td>
//       <td>32</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Gustavo</td>
//       <td>24</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Roberta</td>
//       <td>33</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Ricardo</td>
//       <td>38</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Juliana</td>
//       <td>26</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//     <tr>
//       <td>Thiago</td>
//       <td>27</td>
//       <td><label className="checkbox-label">
//     <input type="checkbox" className="checkbox-input"/>
//     <span className="checkbox-custom"></span>
//   </label></td>
//     </tr>
//             </tbody>
//         </table>
//         </div>
//         <div className="finalizar-container">
//             <button className="finalizar-btn">Finalizar Chamada</button>
//         </div>
//     </div>
//     );
// }
// export default Chamada;