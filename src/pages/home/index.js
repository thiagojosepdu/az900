import React, { useState } from "react";
import "./home.css";

function Home() {
  const [minimizado, setMinimizado] = useState(false);
  const [minimizadoTeste, setMinimizadoTeste] = useState(false);
  const [minimizadoTopico3, setMinimizadoTopico3] = useState(false);
  const [minimizadoTopico4, setMinimizadoTopico4] = useState(false);
  const [minimizadoTopico5, setMinimizadoTopico5] = useState(false);
  const [minimizadoTopico6, setMinimizadoTopico6] = useState(false);
  const [minimizadoTopico7, setMinimizadoTopico7] = useState(false);

  const toggleMinimizar = () => {
    setMinimizado(!minimizado);
  };

  const toggleMinimizarTeste = () => {
    setMinimizadoTeste(!minimizadoTeste);
  };

  const toggleMinimizarTopico3 = () => {
    setMinimizadoTopico3(!minimizadoTopico3);
  };

  const toggleMinimizarTopico4 = () => {
    setMinimizadoTopico4(!minimizadoTopico4);
  };

  const toggleMinimizarTopico5 = () => {
    setMinimizadoTopico5(!minimizadoTopico5);
  };

  const toggleMinimizarTopico6 = () => {
    setMinimizadoTopico6(!minimizadoTopico6);
  };

  const toggleMinimizarTopico7 = () => {
    setMinimizadoTopico7(!minimizadoTopico7);
  };

  return (
    <div className={`home-container ${minimizado ? "minimizado" : ""}`}>
      <div className="info-importante">
        <h1>Informações importantes</h1>
        <ul>
          <li>
            A versão em inglês deste exame foi atualizada em 31 de julho de
            2023. Examine o guia de estudo vinculado na caixa “Dica” anterior
            para obter detalhes sobre as habilidades avaliadas e as alterações
            mais recentes.
          </li>
          <br />
          <li>Links Importantes:</li>          
          <a href="https://learn.microsoft.com/credentials/certifications/exams/az-900/practice/assessment?assessment-type=practice&assessmentId=23" target="_blank" rel="noopener noreferrer">
          Simulado Oficial</a> 
          <br />
          <a href="https://learn.microsoft.com/pt-br/credentials/certifications/exams/az-900/" target="_blank" rel="noopener noreferrer">
          Curso Oficial</a> 
          <br />
          <a href="https://www.udemy.com/course/az-900-preparacao-para-o-exame-microsoft-azure-fundamentals/" target="_blank" rel="noopener noreferrer">
          Curso Udemy</a> 
          <br />
          <a href="https://www.udemy.com/course/az-900-preparacao-para-o-exame-microsoft-azure-fundamentals/" target="_blank" rel="noopener noreferrer">
          Guia de Estudos AZ-900 Azure Fundamentals [Update 2023]</a> 
          <br />
          <a href="https://www.studocu.com/pt-br/document/universidade-tecnologica-federal-do-parana/programacao-basica/simulado-az-900-informacao-sobre-a-prova-de-certificacao-azure/38287227" target="_blank" rel="noopener noreferrer">
          Simulado com quetões pré oficiais</a> 
          <br />
        </ul>
      </div>

      <div className="habilidades">
        <h1>Habilidades Necessárias</h1>
        <ul>
          <li>Conceitos de nuvem (20-25%)</li>
          <li>Principais serviços do Azure (15-20%)</li>
          <li>Principais soluções e ferramentas de gerenciamento (10-15%)</li>
          <li>Segurança geral e os recursos de segurança da rede (10-15%)</li>
          <li>Recursos de identidade, governança, privacidade e conformidade (15-20%)</li>
          <li>Gerenciamento de custos e acordos de nível de serviço do Azure (10-15%)</li>
        </ul>
      </div>

      <div className="texto-adicional">
        <h1 onClick={toggleMinimizar}>Conceito de Nuvem</h1>
        {!minimizado && (
          <>
            <p> </p>
            <div className="subtopico">
              <h2>1-O que é computação na nuvem</h2>
              <p>
                É a entrega de serviços de computação que incluem uma
                infraestrutura de TI comum, como VM, armazenamento, BD e redes.
                Além de IoT e uma IA.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>1.1-Alta Disponibilidade</h2>
              <p>
                Garantir a disponibilidade máxima, independente de interrupções
                ou eventos que possam ocorrer. Ou seja, fornecer uma experiência
                contínua do usuário sem tempo de inatividade aparente, mesmo
                quando as coisas dão errado.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>1.2-Agilidade</h2>
              <p>
                Implante e configure recursos baseados em nuvem rapidamente à
                medida que os requisitos do aplicativo forem alterados.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>1.3-Elasticidade</h2>
              <p>
                Elasticidade significa que você pode configurar aplicativos
                baseados em nuvem para aproveitar o dimensionamento automático,
                para que os aplicativos sempre tenham os recursos necessários.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>1.4-Escalabilidade</h2>
              <p>
                Significa que você pode adicionar RAM, CPU ou máquinas virtuais
                inteiras a uma configuração. Ou seja, capacidade de ajustar os
                recursos para atender à demanda. Exemplo: Se houver muito
                tráfego, há a possibilidade de escalar o recurso para lidar com
                o aumento da demanda.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>1.5-Tipos de dimensionamento</h2>
              <p>
                Há dois tipos, o Dimensionamento Vertical (Hardware): Capacidade
                de processamento, ou seja, adicionar mais CPUs ou RAM.
                Dimensionamento Horizontal (Computadores): Adiciona instâncias
                de recursos, como máquinas virtuais e containers.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>1.6-Confiabilidade</h2>
              <p>Capacidade de recuperar falhas e continuar funcionando.</p>
            </div>
            <br />
            <br />
            <div className="subtopico">
              <h2>2-Modelo de responsabilidade compartilhada</h2>
              <p>
                Refere-se à segurança física, energia, refrigeração e à
                conectividade de rede sendo de responsabilidade do provedor de
                nuvem. O consumidor é responsável apenas pelos dados,
                informações armazenadas e a segurança de tais dados.
              </p>
            </div>
            <br />
            <br />
            <div className="subtopico">
              <h2>3-Tipos de serviço em nuvem </h2>
            </div>

            <div className="subtopico">
              <h2>
                3.1-IAAS (Migre-Gestor de infraestrutura/Servidores físicos)
              </h2>
              <p>
                Responsável pelos princípios de segurança física de
                infraestrutura, como servidores, hospedagem (armazenamento),
                rede(network), datacenters, virtualização e hardware. “Tudo que
                você faz”. Desta forma, a maior responsabilidade está no
                consumidor, já que o provedor de nuvem é responsável pelas
                questões básicas de segurança física, energia e conectividade.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>3.2-PAAS (Construa-Ambiente de desenvolvimento)</h2>
              <p>
                Distribui responsabilidade entre o provedor de nuvem e o
                consumidor, ou seja, gerencia recursos de hardware e software.
                Seu objetivo principal é oferecer um ambiente para
                desenvolvedores que pode ser usado para criar APP e serviços na
                internet sem precisar usar o on premise (servidor local).
                Portanto, no PAAS o usuário gerencia as aplicações e dados. Isto
                é, “Utiliza a aplicação, paga pela aplicação e não se preocupa
                com licenças e etc”. Seus principais recursos são:
                Rotina/processos (runtime), serviço de integração (middleware),
                sistema operacional (O/S), virtualização (virtualization),
                servidores (servers), armazenamento (storage) e a rede
                (networking). Como exemplo podemos citar aplicações CDN (Content
                delivery network) e Cosmo DB.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>3.3-SAAS (use-Aplicações em nuvem)</h2>
              <p>
                Uso de 100% na nuvem, sem precisar rodar nada local ou instalar
                algo, ex: One drive e Pacote Office (Office 365). Seus
                principais recursos são: Aplicações (application), dados (data),
                rotina/processos (runtime), serviço de integração (middleware),
                sistema operacional (O/S), virtualização (virtualization),
                servidores (servers), armazenamento (storage) e a rede
                (networking). “NÃO SE PREOCUPA COM NADA RELACIONADO AO
                SOFTWARE”.
              </p>
            </div>
            <br />
            <br />

            <div className="subtopico">
              <h2>4-Definição de modelos de nuvem</h2>
            </div>

            <div className="subtopico">
              <h2>4.1-Nuvem privada</h2>
              <p>
                Você monta a sua própria estrutura, ou seja, entra em contato
                com data center e vai montando, tendo que se preocupar com
                datacenter, hardware, licença, etc. Utilizada por bancos e
                governos. A empresa retém muito mais recursos e pode ser
                hospedada em data center local.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>4.2-Nuvem pública (Mais barato e mais comum)</h2>
              <p>
                Você só aluga a parte virtual, já que a parte de hardware e a
                manutenção ficam por conta da provedora de nuvem. Mantida pelo
                provedor de nuvem terceiro. Qualquer pessoa que queira adquirir
                o serviço pode acessar e utilizar.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>4.3-Nuvem híbrida</h2>
              <p>
                Pode ser utilizada como camada extra de segurança. Ela conecta a
                pública e a privada, além de ter maior flexibilidade. Quando
                você utiliza VM pública e algum software privado por questões
                governamentais. Desta forma, temos uma rede híbrida. Multinuvem:
                Quando é utilizado vários provedores de nuvem pública.
              </p>
            </div>
            <br />
            <br />

            <div className="subtopico">
              <h2>5-Tecnologias para modelos de nuvem</h2>
            </div>

            <div className="subtopico">
              <h2>5.1-Azure Arc</h2>
              <p>
                Tecnologias que ajudam a gerenciar o ambiente de nuvem. O Azure
                Arc fornece uma forma centralizada e unificada para: Gerenciar
                todo o seu ambiente projetando os recursos existentes que não
                são do Azure e/ou locais no Azure Resource Manager; Gerenciar
                máquinas virtuais, clusters do Kubernetes e bancos de dados como
                se estivessem em execução no Azure; Usar as funcionalidades
                familiares de gerenciamento e serviços do Azure,
                independentemente de onde eles estejam hospedados; Continuar
                usando a ITOps tradicional, introduzindo práticas de DevOps para
                dar suporte a novos padrões nativos de nuvem no seu ambiente;
                Configurar localizações personalizadas como uma camada de
                abstração no cluster de Kubernetes habilitado para Azure Arc e
                nas extensões de cluster.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>5.2-Soluções VMWare no Azure</h2>
              <p>
                É utilizada quando se quer migrar uma tecnologia, exemplo:
                Privada para pública. O VMWare permite executar cargas de
                trabalho com integração e escalabilidade.
              </p>
            </div>
            <br />
            <br />

            <div className="subtopico">
              <h2>6-Modelo baseado em consumo</h2>
            </div>

            <div className="subtopico">
              <h2>6.1-CapEx (Despesa de capital/longo prazo)</h2>
              <p>
                Despesa única e inicial para comprar e garantir os recursos
                tangíveis, exemplos: maquinários e hardwares.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>6.2-OpEx (Despesa com operacional/curto prazo)</h2>
              <p>
                Gasta dinheiro em serviços e produtos ao longo do tempo. Nesse
                caso, temos a própria computação na nuvem, já que ela se baseia
                em consumo, como exemplo pode-se citar: manutenção de
                datacenters, segurança e eletricidade. Os benefícios do OpEx na
                Azure são: Sem custo; Não precisa adquirir e gerenciar estrutura
                cara que talvez não utilize todo o seu potencial; Pode pagar por
                mais recursos quando necessário; Pode parar de pagar quando
                necessário.
              </p>
            </div>
            <br />
            <br />

            <div className="subtopico">
              <h2>7-Descrevendo infraestrutura física Azure</h2>
            </div>

            <div className="subtopico">
              <h2>7.1-Regiões</h2>
              <p>
                Área geográfica que contém ao menos um ou vários datacenters
                próximos e conectados em rede com uma rede de baixa latência.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>7.2-Zona de disponibilidade</h2>
              <p>
                São literalmente os prédios com datacenter. Datacenters
                fisicamente separados dentro de uma região da Azure. Cada zona
                de disponibilidade é composta por um ou mais datacenters
                equipados com energia, refrigeração e rede independente. Com a
                zona de disponibilidade é possível executar aplicativos de
                missão crítica e criar alta disponibilidade na arquitetura. Elas
                se destinam a VMs, discos, balanceadores e BD. Comentário:
                Quando a Azure vai abrir uma nova região, exemplo São Paulo, são
                colocados 3 datacenters em três regiões e caso tenhamos um
                desastre natural em uma região a outra continua conectada.
                Lembrando que ao criar uma VM a própria Azure tem formas de
                replicação automática, ou seja, se cria a VM na zona de
                disponibilidade 1, a própria Azure também cria essa VM na zona
                de disponibilidade 1, a própria azure também cria essa VM na
                zona 2 e 3, já que se um se torna indisponível o “user” vai para
                a próxima zona sem perceber que está em outra zona, isso porque
                a latência e extremamente baixa, quase imperceptível que tem
                três zonas de disponibilidade.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>7.3-Pares de regiões</h2>
              <p>
                Emparelhamento com outra região dentro da mesma geografia (como
                EUA, Europa ou Ásia), exemplo: Oeste dos EUA emparelhado com o
                Leste do EUA e o Sudeste da Ásia. Essa abordagem permite a
                replicação de recursos, como o armazenamento de VM, em uma
                região geográfica, o que deve reduzir a probabilidade de
                desastres naturais, conflitos civis, quedas de energia ou
                interrupções de rede física afetarem as duas regiões ao mesmo
                tempo.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>7.4-Regiões soberanas</h2>
              <p>Instâncias da Azure isoladas da instância principal.</p>
            </div>
            <br />

            <div className="subtopico">
              <h2>7.5-Grupos de recursos</h2>
              <p>
                São as regiões da Azure, cada servidor físico que está em uma
                zona de disponibilidade. Desta forma, a sua organização virtual
                é chamada de grupo de recursos. Exemplo, posso criar um grupo de
                servidores, banco de dados e outros. Exemplo, posso criar grupo
                de recursos por filial da empresa, por ambiente (PROD e
                NONPROD). Os grupos de recursos separados são úteis para saber
                quanto cada um está gastando. Porque consigo saber se a máquina
                virtual 1 está no grupo de recurso de ambiente nonprod ou prod.
                LEMBRANDO que gerencia os recursos na Azure é o ARM (Azure
                Resource Management).
              </p>
            </div>
            <br />
          </>
        )}
      </div>

      <div className="texto-adicional">
        <h1 onClick={toggleMinimizarTeste}>Principais Serviços da Azure</h1>
        {!minimizadoTeste && (
          <>
            <p> </p>
            <div className="subtopico">
              <h2>1-Conceitos de IPV4</h2>
              <p>
                O que é IPv4? IPv4 (Internet Protocol versão 4) é o formato de
                endereço padrão que permite que todos os computadores na
                internet se comuniquem entre si. O IPv4 é escrito como uma
                sequência de dígitos de 32 bits e um endereço IPv4 é composto
                por quatro números, cada um entre 0 e 255, separados por pontos.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>2-Load Balance (Balanceador de carga)</h2>
              <p>
                Você tem um servidor web e do outro lado tem toda a
                internet(público) que vai acessar o servidor web que tem
                limitação de hardware e ao invés de 10 eu comecei a receber
                10000 mensagens. Como saber se meu cliente está acessando meu
                conteúdo? Eu posso criar um outro servidor, mas o meu público
                não vai saber qual servidor entrar. Então no meu eu coloco um
                Balanceador de carga. Onde eu posso criar regras, que pode
                enviar para VM 1 70% do tráfego e 30% para VM2.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>3-O quê é a rede virtual do Azure?</h2>
              <p>
                As redes virtuais do Azure permitem que recursos do Azure, como
                VMs, aplicativos Web e bancos de dados, comuniquem-se uns com os
                outros, com usuários na Internet e com computadores cliente
                locais. Pense em uma rede do Azure como um conjunto de recursos
                que vincula outros recursos do Azure. As redes virtuais do Azure
                oferecem as seguintes funcionalidades de rede essenciais:
                <br />
                • Isolamento e segmentação
                <br />
                • Comunicação pela Internet
                <br />
                • Comunicação entre recursos do Azure
                <br />
                • Comunicação com os recursos locais
                <br />
                • Rotear tráfego de rede
                <br />
                • Filtrar tráfego de rede
                <br />
                • Conectar redes virtuais
                <br />
                Você pode vincular redes virtuais usando o emparelhamento dessas
                redes. O emparelhamento permite que os recursos em cada rede
                virtual se comuniquem entre si. Essas redes virtuais podem estar
                em regiões separadas, o que permite criar uma rede global
                interconectada por meio do Azure. UDR (Rotas Definidas pelo
                Usuário [User Defined Routes]) é o roteamento definido pelo
                usuário. O UDR é uma atualização significativa das Redes
                Virtuais do Azure, pois permite que os administradores de rede
                controlem as tabelas de roteamento entre as sub-redes de uma
                VNet, bem como entre VNets, possibilitando um maior controle
                sobre o fluxo de tráfego de rede.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>4-VPN Gateways</h2>
              <p>
                Conecta recursos da minha empresa com a minha cloud para ter
                conectividade. Imagina que eu tenha um conteúdo que ninguém pode
                visualizar. Então eu crio um túnel encriptado, para conectar
                ambos os pontos, mas ninguém vai ter acesso, Isso é o VPN
                Gatware. Permitem a seguinte conectividade:
                <br />
                • Conecte datacenters locais a redes virtuais por meio de uma
                conexão site a site.
                <br />
                • Conecte dispositivos individuais a redes virtuais por meio de
                uma conexão ponto a site.
                <br />
                • Conecte redes virtuais a outras redes virtuais por meio de uma
                conexão rede a rede.
                <br />
                • Caso seja muito complicado definir quais endereços IP estão
                por trás de cada túnel, será possível usar gateways baseados em
                rota. Com gateways baseados em rota, os túneis IPSec são
                modelados como uma interface de rede ou uma interface de túnel
                virtual. O roteamento de IP (protocolos de roteamento dinâmico
                ou rotas estáticas) decide qual dessas interfaces de túnel usar
                ao enviar cada pacote. VPNs baseadas em rota são o método
                preferido para conectar dispositivos locais. Elas são mais
                resilientes a alterações de topologia, como a criação de novas
                sub-redes.
                <br />
                Use um gateway de VPN baseado em rota se precisar de qualquer um
                dos seguintes tipos de conectividade:
                <br />
                • Conexões entre redes virtuais
                <br />
                • Conexões ponto a site
                <br />
                • Conexões multissite
                <br />
                • Coexistência com um gateway do Azure ExpressRoute
                <br />
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>5-Application Gateway</h2>
              <p>
                Ele é adicionado ao load balance e com ele é possível fazer
                diferenciação entre imagens e outros. O Gateway de Aplicativo do
                Azure é um balanceador de carga de tráfego da Web (camada 7 OSI)
                que permite que você gerencie o tráfego para seus aplicativos
                Web. Os balanceadores de carga tradicionais operam na camada de
                transporte (camada OSI 4 – TCP e UDP) e encaminham o tráfego com
                base no endereço IP de origem e na porta para um endereço IP de
                destino e uma porta. 15 O Gateway de Aplicativo pode tomar
                decisões de roteiros com base em outros atributos de uma
                solicitação HTTP, por exemplo, o caminho de URI ou os cabeçalhos
                de host. Por exemplo, você pode encaminhar o tráfego com base na
                URL de entrada. Portanto, se /images estiver na URL de entrada,
                você poderá encaminhar o tráfego para um conjunto específico de
                servidores (conhecido como um pool) configurado para as imagens.
                Se /video estiver na URL, esse tráfego será encaminhado para
                outro pool otimizado para vídeos.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>6-ExpressRoute do Azure</h2>
              <p>
                Você tem um servidor web e do outro lado tem toda a
                internet(público) que vai acessar o servidor web que tem
                limitação de hardware e ao invés de 10 eu comecei a receber
                10000 mensagens. Como saber se meu cliente está acessando meu
                conteúdo? Eu posso criar um outro servidor, mas o meu público
                não vai saber qual servidor entrar. Então no meu eu coloco um
                Balanceador de carga. Onde eu posso criar regras, que pode
                enviar para VM 1 70% do tráfego e 30% para VM2.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>7-Serviços de Armazenamento do Azure</h2>
              <p>
                Os serviços de armazenamento de núcleo oferecem um armazenamento
                de objetos altamente escalonável para objetos de dados,
                armazenamento em disco para VMs (máquinas virtuais) do Azure, um
                serviço de sistema de arquivos para a nuvem, um repositório de
                mensagens para mensagens confiáveis e um repositório NoSQL. Os
                serviços são:
                <br />
                • Duráveis e altamente disponíveis: A redundância garante a
                segurança dos seus dados no caso de falhas de hardware
                transitórias.
                <br />
                • Seguros: Todos os dados gravados em uma conta de Armazenamento
                do Microsoft Azure são criptografados pelo serviço.
                <br />
                • Escalonáveis: O Armazenamento do Azure foi concebido para ser
                altamente escalonável e atender às necessidades de desempenho e
                armazenamento de dados dos aplicativos atuais.
                <br />
                • Gerenciados: o Azure cuida da manutenção de hardware, das
                atualizações e dos problemas críticos para você.
                <br />
                • Acessíveis: Os dados no Armazenamento do Azure são acessíveis
                de qualquer lugar no mundo por HTTP ou HTTPS. A Microsoft
                fornece bibliotecas de clientes para o Armazenamento do
                Microsoft Azure em várias linguagens, incluindo .NET, Java,
                Node.js, Python, PHP, Ruby, Go, entre outras, bem como uma API
                REST bem desenvolvida.
                <br />
                A plataforma de Armazenamento do Microsoft Azure inclui os
                seguintes serviços de dados:
                <br />
                • Azure Blobs: um repositório de objetos altamente escalonável
                para texto e dados binários. Ela também inclui suporte para
                análise de Big Data por meio do Data Lake Storage Gen2.
                <br />
                • Azure Files: compartilhamentos de arquivos gerenciados para
                implantações locais e em nuvem.
                <br />
                • Azure Queues: um armazenamento de mensagens para um sistema de
                mensagens confiável entre componentes do aplicativo.
                <br />
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>8-CDN (Rede de distribuição de conteúdo)</h2>
              <p>
                Se eu tenho uma aplicação no Brasil que a VM está no Brasil, ela
                fica muito acessível para os brasileiros. Mas os clientes da
                Austrália vai estar longe. Então vou precisar ter um CDN para
                enviar uma cópia do conteúdo, ou seja, ele envia uma cópia do
                que tem no Brasil para outros servidores do país mais próximo,
                exemplo lá na Austrália, assim a aplicação visualiza a cópia e o
                cliente tem acesso muito rápido achando que a aplicação está na
                Austrália.
              </p>
            </div>
            <br />
          </>
        )}
      </div>

      <div className="texto-adicional">
        <h1 onClick={toggleMinimizarTopico3}>
          Principais soluções e ferramentas de gerenciamento
        </h1>
        {!minimizadoTopico3 && (
          <>
            <p> </p>
            <div className="subtopico">
              <h2>1-Azure PowerShell</h2>
              <p>
                O Azure PowerShell é um shell com o qual os desenvolvedores,
                DevOps e profissionais de TI podem executar comandos chamados
                cmdlets (pronuncia-se command-lets). Esses comandos chamam a API
                REST do Azure para executar toda tarefa de gerenciamento
                possível no Azure.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>2-Azure Monitor</h2>
              <p>
                O Azure Monitor é uma plataforma para coleta, análise,
                visualização e potencial execução de ações com base dos dados de
                registro emlog e de métrica de todo o ambiente doAzure e local.
                O diagrama a seguir ilustra o nível de abrangência do Azure
                Monitor.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>3-Integridade de Serviço</h2>
              <p>
                A Integridade do Serviço ajuda você a ficar atento a vários
                tipos de evento:
                <br />
                • Problemas de serviço são problemas no Azure, como
                interrupções, que afetam você no momento.
                <br />
                • Os eventos de manutenção planejada podem afetar sua
                disponibilidade.
                <br />
                • Os avisos de integridade são problemas que exigem que você aja
                para evitar a interrupção do serviço, incluindo descontinuações
                de serviço e alterações significativas. Os comunicados de
                integridade são anunciados com antecedência para permitir que
                você se planeje.
                <br />
              </p>
            </div>
            <br />
          </>
        )}
      </div>



      <div className="texto-adicional">
        <h1 onClick={toggleMinimizarTopico4}>
        Segurança geral e os recursos de segurança da
rede
        </h1>
        {!minimizadoTopico4 && (
          <>
            <p> </p>
            <div className="subtopico">
              <h2>1-O que é a Central de Segurança do Azure? (Microsoft defender para a
nuvem)</h2>
              <p>
              A Central de Segurança do Azure é um serviço de monitoramento que fornece visibilidade da
postura de segurança em todos os serviços, tanto no Azure quanto localmente. O termo postura
de segurança se refere a políticas e controles de segurança cibernética, bem como à sua
capacidade de prever, impedir e responder com sucesso às ameaças de segurança. A Central de
Segurança pode:
<br />
• Monitorar as configurações de segurança das cargas de trabalho locais e na nuvem.
<br />
• Aplicar automaticamente as configurações de segurança obrigatórias aos novos recursos à
medida que ficarem online.
<br />
• Fornecer recomendações de segurança baseadas nas configurações, nos recursos e nas redes
atuais.
<br />
• Monitorar continuamente os recursos e realizar avaliações de segurança automáticas para
identificar possíveis vulnerabilidades antes que elas possam ser exploradas.
<br />
• Usar machine learning para detectar e bloquear a instalação de malwares em VMs (máquinas
virtuais) e em outros recursos. Você também pode usar os controles de aplicativo adaptáveis
para definir regras que listam os aplicativos permitidos a fim de verificar se somente os
aplicativos que você permitir serão executados.
<br />
• Detectar e analisar possíveis ataques de entrada e investigar ameaças e qualquer atividade
pós-violação que possa ter ocorrido.
<br />
• Fornecer controle de acesso just-in-time para as portas de rede. Isso reduz a superfície de
ataque, garantindo que a rede só permita o tráfego exigido por você, no momento necessário.
<br />
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>2-Postura de Segurança</h2>
              <p>
              A Uni Academy pode usar a Central de Segurança para obter uma análise detalhada dos
diferentes componentes de seu ambiente. Como os recursos da empresa são analisados em
relação aos controles de segurança das políticas de governança atribuídas, eles podem ver a
conformidade regulatória geral de uma perspectiva de segurança, tudo em um só lugar
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>3-Azure Sentinel</h2>
              <p>
              O Azure Sentinel é o sistema de SIEM baseado em nuvem da Microsoft. Ele usa análise de
segurança e análise de ameaças inteligentes. O Azure Sentinel permite:
<br />
• Coletar dados de nuvem em escala Colete dados de todos os usuários, dispositivos, aplicativos
e infraestrutura, tanto locais quanto de várias nuvens.
<br />
• Detectar ameaças não detectadas anteriormente minimize falsos positivos usando a análise
abrangente e a inteligência contra ameaças da Microsoft.
<br />
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>4-Azure Key Vault</h2>
              <p>
              O Azure Key Vault é um serviço de nuvem centralizado para armazenar segredos do aplicativo
em um só local centralizado. Ele oferece acesso seguro a informações confidenciais fornecendo
controle de acesso e funcionalidades de registro em log. O Azure Key Vault pode ajudar você a:
<br />
• Gerenciar segredos Você pode usar o Key Vault para armazenar tokens, senhas, certificados,
chaves de API e outros segredos e controlar com segurança o acesso a eles.
<br />
• Gerenciar chaves de criptografia Você pode usar o Key Vault como uma solução de
gerenciamento de chaves. O Key Vault facilita a criação e o controle das chaves de criptografia
usadas para criptografar os dados.
<br />
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>5-Host dedicado do Azure</h2>
              <p>
              No Azure, as VMs (máquinas virtuais) são executadas em hardware compartilhado gerenciado
pela Microsoft. Embora o hardware subjacente seja compartilhado, suas cargas de trabalho de
VM são isoladas das cargas de trabalho executadas por outros clientes do Azure. Algumas
organizações precisam aderir à conformidade regulatória que exige que elas sejam o único
cliente usando o computador físico que hospeda as máquinas virtuais. O Host Dedicado do Azure
fornece servidores físicos dedicados para hospedar as VMs do Azure para Windows e Linux. Veja
um diagrama que mostra como as VMs se relacionam com hosts dedicados e grupos de hosts.
Um host dedicado é mapeado para um servidor físico em um datacenter do Azure. Um grupo de
hosts é uma coleção de hosts dedicados.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>6-Defesa profunda</h2>
              <p>
              O objetivo da defesa profunda é proteger as informações e impedir que elas sejam roubadas
por pessoas que não estão autorizadas a acessá-las. Uma estratégia de defesa em profundidade
usa uma série de mecanismos para reduzir o avanço de um ataque que busca obter acesso não
autorizado aos dados.
Você pode visualizar a defesa em profundidade como um conjunto de camadas, com os dados
a serem protegidos no centro.
<br />
• A camada de segurança física é a primeira linha de defesa para proteger o hardware de
computação no datacenter.
<br />
• A camada de identidade e acesso controla o acesso à infraestrutura e ao controle de
alterações.
<br />
• A camada de perímetro usa a proteção contra DDoS (ataque de negação de serviço distribuído)
para filtrar ataques em grande escala antes que eles possam causar uma negação de serviço
para os usuários.
<br />
• A camada de rede limita a comunicação entre recursos por meio de controles de acesso e
segmentação.
<br />
• A camada de computação protege o acesso a máquinas virtuais.
<br />
• A camada de aplicativo ajuda a garantir que os aplicativos estejam seguros e livres de
vulnerabilidades de segurança.
<br />
• A camada de dados controla o acesso aos dados corporativos e do cliente que você precisa
proteger.
<br />
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>7-O quê é o Firewall do Azure?</h2>
              <p>
              O Firewall do Azure é um serviço de segurança de rede gerenciado e baseado em nuvem que
ajuda a proteger recursos nas redes virtuais do Azure. Uma rede virtual é semelhante a uma
rede tradicional que você operaria em seu datacenter. É um bloco de construção fundamental
para sua rede privada que permite que máquinas virtuais e outros recursos de computação se
comuniquem com segurança entre si, pela Internet e pelas redes locais.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>8-O quê é um Ataque DDOS?</h2>
              <p>
              Um ataque de negação de serviço distribuído tenta sobrecarregar e esgotar os recursos de um
aplicativo, tornando-o lento ou sem resposta para usuários legítimos. Os ataques de DDoS
podem ter como alvo qualquer recurso acessível publicamente pela Internet, incluindo sites.
A Proteção contra DDoS do Azure (Standard) ajuda a proteger seus recursos do Azure contra
ataques de DDoS. Ao combinar a Proteção contra DDoS com práticas recomendadas de design
de aplicativo, você ajuda a fornecer uma defesa contra ataques de DDoS. A Proteção contra
DDoS usa a escala e a elasticidade da rede global da Microsoft para levar capacidade de
22
mitigação de DDoS a todas as regiões do Azure. O serviço de Proteção contra DDoS ajuda a
proteger seus aplicativos do Azure analisando e descartando o tráfego de DDoS na borda da
rede do Azure, antes que ele possa afetar a disponibilidade do serviço. Este diagrama mostra o
tráfego de rede fluindo dos clientes e de um invasor para o Azure:
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>9-Grupos de Segurança de Rede do Azure</h2>
              <p>
              Um grupo de segurança de rede permite filtrar o tráfego de rede proveniente dos recursos do
Azure e destinado a eles em uma rede virtual do Azure. Considere os NSGs como um firewall
interno. Um NSG pode conter várias regras de segurança de entrada e saída que permitem a
filtragem do tráfego para e de recursos por endereço IP de origem e de destino, porta e
protocolo.
              </p>
            </div>
            <br />
          </>
        )}
      </div>





      <div className="texto-adicional">
        <h1 onClick={toggleMinimizarTopico5}>
        Recursos de identidade, governança, privacidade e conformidade
        </h1>
        {!minimizadoTopico5 && (
          <>
            <p> </p>
            <div className="subtopico">
              <h2>1-Comparar as calculadoras Preço e Custo Total de Propriedade</h2>
              <p>
              Calculadora de preço: custo estimado para provisionar recursos no Azure. O custo de
todos os recursos provisionados, incluindo computação, armazenamento e custos de rede associados. Você pode até mesmo considerar diferentes opções de armazenamento, como tipo
de armazenamento, camada de acesso e redundância.
<br />
Calculadora de TCO: comparar os custos para executar uma infraestrutura local versus
uma infraestrutura de nuvem do Azure.
<br />
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>2-Custos</h2>
              <p>
              Gerenciamento de Custo: permite verificar rapidamente os custos de recursos do Azure,
criar alertas com base nos gastos com recursos e criar orçamentos que podem ser usados para
automatizar o gerenciamento de recursos.
A análise de custo é um subconjunto de Gerenciamento de Custos que apresenta um
visual rápido para os custos do Azure. Usando a análise de custo, você pode visualizar
rapidamente o custo total de várias maneiras, inclusive por ciclo de cobrança, região, recurso
etc.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>3-Alertas de custo:</h2>
              <p>
              Os alertas de custo fornecem um só local para verificar rapidamente
todos os diferentes tipos de alerta que podem aparecer no serviço de Gerenciamento de Custos.
Os três tipos de alertas que podem aparecer são:
<br />
• Alertas de orçamento
<br />
• Alertas de crédito
<br />
• Alertas de cota de gastos do departamento.
<br />
• Questões para fixação 
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>4-Alertas de orçamento</h2>
              <p>
              notificam você quando os gastos, com base em uso ou custos,
atingem ou excedem o valor definido na condição de alerta do orçamento.
No portal do Azure, os orçamentos são definidos pelo custo. Os orçamentos são
definidos pelo custo ou pelo uso de consumo ao usar a API de Consumo do Azure. Alertas de
orçamento dão suporte a orçamentos com base em custo e em uso. 
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>5-Alertas de crédito</h2>
              <p>
              Os alertas de crédito notificam você quando seus compromissos
monetários de crédito do Azure são consumidos. Os compromissos monetários se destinam a
organizações que têm EAs (Contratos Enterprise). 
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>6-Alertas de cota de gasto do departamento</h2>
              <p>
              Os alertas de cota de gasto do departamento notificam você quando os gastos do
departamento atingem um limite fixo da cota. As cotas de gasto são configuradas no Portal do
EA.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>7-Orçamentos</h2>
              <p>
              É em um orçamento que você define um limite de gastos para o Azure. Você pode definir
orçamentos com base em uma assinatura, grupo de recursos, tipo de serviço ou outros critérios.
Ao definir um orçamento, você também define um alerta de orçamento. Quando o orçamento
atinge o nível de alerta do orçamento, ele dispara um alerta de orçamento que aparece na área
de alertas de custo.
Um uso mais avançado de orçamentos permite que as condições orçamentárias
disparem a automação que suspende ou modifica recursos depois que a condição de gatilho
ocorre.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>8-Marcações</h2>
              <p>
              As marcas permitem associar metadados a um recurso para ajudar a
controlar o gerenciamento de recursos, os custos e a otimização, a segurança etc.
              </p>
            </div>
            <br />
          </>
        )}
      </div>


      <div className="texto-adicional">
        <h1 onClick={toggleMinimizarTopico6}>
        Gerenciamento de custos e acordos de nível de
serviço do Azure 
        </h1>
        {!minimizadoTopico6 && (
          <>
            <p> </p>
            <div className="subtopico">
              <h2>1-O que é a Calculadora de TCO? (Custo total de propriedade)?</h2>
              <p>
              Compara os custos para executar uma infraestrutura local versus uma infraestrutura de
nuvem do Azure. Ela, ajuda a estimar a economia de custos de operar sua solução no Azure ao
longo do tempo, em vez de no datacenter local.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>2-Que tipos de assinaturas do Azure posso usar?</h2>
              <p>
              Avaliação gratuita: Uma assinatura de avaliação gratuita fornece 12 meses de serviços gratuitos
populares, um crédito para explorar qualquer serviço do Azure por 30 dias e mais de 25 serviços
que são sempre gratuitos. Os serviços do Azure são desabilitados quando a avaliação termina
ou quando seu crédito expira para produtos pagos, a menos que você atualize para uma
assinatura paga.

              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>3-Que tipos de assinaturas do Azure posso usar?</h2>
              <p>
              Pago conforme o uso: Uma assinatura com Pagamento Conforme o Uso permite que você pague
pelo que usar vinculando um cartão de crédito ou débito à sua conta. As organizações podem
se candidatar a descontos por volume e a faturamento pré-pago.
<br />
Ofertas de membro: Sua associação existente para determinados produtos e serviços da
Microsoft pode fornecer créditos para sua conta do Azure e taxas reduzidas nos serviços do
Azure. Por exemplo, ofertas de membros estão disponíveis para assinantes do Visual Studio,
membros da Microsoft Partner Network, membros da Microsoft para Startups e membros do
Microsoft Imagine.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>4-Use o Assistente do Azure para monitorar seu uso</h2>
              <p>
              O Assistente do Azure identifica recursos não utilizados ou subutilizados e recomenda recursos
não utilizados que podem ser removidos. Essa informação ajuda a configurar seus recursos para
que correspondam à carga de trabalho real. 
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>5-Use o Gerenciamento de Custos do Azure + Cobrança para controlar os
gastos</h2>
              <p>
              O Gerenciamento de Custos do Azure + Cobrança é um serviço gratuito que ajuda você a
entender sua fatura do Azure, gerenciar sua conta e assinaturas, monitorar e controlar os gastos
do Azure e otimizar o uso de recursos.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>6-Aplique marcas para identificar os proprietários de custo</h2>
              <p>
              As marcas ajudam a gerenciar os custos associados aos diferentes grupos de produtos e recursos
do Azure. Você pode aplicar marcas a grupos de recursos do Azure para organizar dados de
cobrança. Por exemplo, se você executar várias VMs para equipes diferentes, poderá usar
marcas para classificar os custos por departamento, como recursos humanos, marketing ou
financeiro, ou por ambiente, como teste ou produção.
As marcas facilitam a identificação dos grupos que geram os maiores custos do Azure, o
que pode ajudar você a ajustar seus gastos de acordo. A seguinte imagem mostra um ano de
uso dividido por marcas na página Gerenciamento de Custos do Azure + Cobrança.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>7-O que são SLAs (Contratos de Nível de Serviço)?</h2>
              <p>
              Um SLA (Contrato de Nível de Serviço) é um contrato formal entre uma empresa de serviços e o
cliente. No caso do Azure, esse contrato define os padrões de desempenho com os quais a
Microsoft se compromete a fornecer para você, o cliente.
              </p>
            </div>
            <br />
          </>
        )}
      </div>




      <div className="texto-adicional">
        <h1 onClick={toggleMinimizarTopico7}>
        Assuntos Principais e Recorrentes
        </h1>
        {!minimizadoTopico7 && (
          <>
            <p> </p>
            <div className="subtopico">
              <h2>1-Tipos de conexões de VPN:</h2>
              <p>
              • VPN Ponto a Site (P2S): permite que você crie uma conexão segura para sua rede
virtual a partir de um computador cliente individual. Uma conexão P2S é estabelecida iniciandoa do computador cliente.
<br />
• VPN Ponto a Site (S2S): é usada para conectar à rede local a uma rede virtual do Azure
por um túnel VPN IPsec/IKE (IKEv1 ou IKEv2). Esse tipo de conexão exige um dispositivo VPN
localizado no local que tenha um endereço IP público voltado para o exterior atribuído a ele.
<br />
• VNet a VNet (VNet2VNet): é um tipo de conexão de rede virtual (VNet) no Microsoft
Azure que permite conectar duas VNets na mesma região ou em regiões diferentes usando uma
conexão segura e criptografada pela Internet.
<br />
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>2-Azure Bastion</h2>
              <p>
              O Azure Bastion é um serviço totalmente gerenciado que fornece um acesso mais seguro e
contínuo de protocolo RDP e de protocolo SSH para VMs (máquinas virtuais) sem qualquer
exposição por meio de endereços IP públicos. Provisione o serviço diretamente em sua rede
virtual local ou emparelhada para obter suporte para todas as VMs dentro dela.

              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>3-Azure Sentinel</h2>
              <p>
              O Azure Sentinel é o sistema de SIEM baseado em nuvem da Microsoft. Ele usa análise de
segurança e análise de ameaças inteligentes. O Azure Sentinel permite:
<br />
• Coletar dados de nuvem em escala Colete dados de todos os usuários, dispositivos, aplicativos
e infraestrutura, tanto locais quanto de várias nuvens.
<br />
• Detectar ameaças não detectadas anteriormente minimize falsos positivos usando a análise
abrangente e a inteligência contra ameaças da Microsoft.
<br />
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>4-Defesa em profundidade</h2>
              <p>
              
O modelo de defesa em profundidade, no contexto do exame Microsoft Azure Fundamentals (AZ-900), é fundamental para garantir a segurança de ambientes de computação em nuvem hospedados no Microsoft Azure. A finalidade desse modelo é estabelecer várias camadas de proteção, cada uma contribuindo de maneira única para a segurança global do sistema. Aqui estão os principais objetivos e finalidades do modelo de defesa em profundidade no contexto do AZ-900.
<br />
• Defesa Física:

Finalidade: Proteger a infraestrutura física contra acesso não autorizado, danos ambientais e outras ameaças físicas.
Medidas: Controle de acesso físico a datacenters, vigilância, sistemas de detecção de intrusão física, redundância de energia e resfriamento.
<br />

• Identidade e Acesso:

Finalidade: Garantir que apenas usuários autorizados tenham acesso aos recursos, aplicativos e dados.
Medidas: Autenticação multifator (MFA), gerenciamento de identidade, controle de acesso baseado em função (RBAC), monitoramento de atividades de identidade.
<br />

• Perímetro:

Finalidade: Proteger o perímetro da rede contra ameaças externas.
Medidas: Firewalls de rede, gateways de aplicativos, serviços de segurança de borda, detecção de intrusão e prevenção de intrusão (IDS/IPS).

<br />
• Rede:

Finalidade: Proteger a comunicação entre recursos e usuários na rede.
Medidas: Listas de controle de acesso (ACLs), VPNs (Redes Privadas Virtuais), monitoramento de tráfego de rede, segurança em camadas (VNETs no Azure).

<br />
• Computação:

Finalidade: Proteger as instâncias de computação e os serviços em execução.
Medidas: Atualizações regulares de segurança (patching), antivírus, isolamento de recursos, configurações de segurança do sistema operacional.

<br />
• Aplicativo:

Finalidade: Garantir a segurança dos aplicativos hospedados na nuvem.
Medidas: Revisões de código seguro, gerenciamento de configuração, controle de acesso a APIs, segurança de aplicativos web.

<br />
• Dados:

Finalidade: Proteger os dados contra acesso não autorizado e garantir sua integridade.
Medidas: Criptografia de dados em repouso e em trânsito, controle de acesso aos dados, backup e recuperação, classificação de dados.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>5-Azure AD</h2>
              <p>
              Fornece serviços de identidade que permitem que os usuários entrem e acessem
aplicativos em nuvem da Microsoft e aplicativos de nuvem que você desenvolve. é um serviço
em nuvem que fornece aos administradores a capacidade de gerenciar identidades de usuários
finais e privilégios de acesso. Seus serviços incluem diretório principal, gerenciamento de acesso
e proteção de identidade.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>6-RBAC do Azure</h2>
              <p>
              O RBAC do Azure permite atribuir um conjunto de permissões a um usuário ou grupo.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>7-Acesso Condicional</h2>
              <p>
              O Acesso Condicional é um recursos que o Microsoft Entra usa para permitir ou negar
acesso a recursos com base em sinais de identidade, como o dispositivo que está sendo usado. 
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>8-SSO</h2>
              <p>
              O SSO permite que um usuário entre uma vez e use essa credencial para acessar vários
recursos e aplicativos de diferentes provedores. 
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>9-MFA</h2>
              <p>
              A MFA é um processo pelo qual um usuário é solicitado durante o processo de entrada
para uma forma adicional de identificação.  
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>10-Identidade híbrida</h2>
              <p>
              As soluções de identidade híbrida criam uma identidade de usuário comum para
autenticação e autorização para todos os recursos, independentemente da localização.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>11-Azure Arc</h2>
              <p>
              Tecnologias que ajudam gerenciar o ambiente de nuvem. O Azure Arc simplifica a
governança e o gerenciamento ao fornecer uma plataforma de gerenciamento local e de várias
nuvens consistente. 
              </p>
            </div>
            <br />



            <div className="subtopico">
              <h2>12-CLI</h2>
              <p>
              A CLI do Azure (interface de linha de comando do Azure) é um conjunto de comandos
usado para criar e gerenciar recursos do Azure. A CLI do Azure permite que você use o shell do
Bash para executar tarefas administrativas. O Bash é usado em ambientes do Linux, portanto,
um administrador do Linux provavelmente ficará mais confortável executando a administração
de linha de comando da CLI do Azure.
              </p>
            </div>
            <br />


            <div className="subtopico">
              <h2>13-ARM </h2>
              <p>
              Ao usar os modelos do ARM, você pode descrever os recursos que deseja usar em um
formato JSON declarativo.
É o serviço de implantação e gerenciamento do Azure. Ele fornece uma camada de
gerenciamento que permite criar, atualizar e excluir recursos em uma assinatura do Azure. Você
usa recursos de gerenciamento, como controle de acesso, bloqueios de recursos e tags de
recursos, para proteger e organizar recursos após a implantação.
              </p>
            </div>
            <br />



            <div className="subtopico">
              <h2>14-Emparelhamento</h2>
              <p>
              Você pode vincular redes virtuais usando o emparelhamento de rede virtual. O
emparelhamento permite que os recursos em cada rede virtual se comuniquem entre si. 
              </p>
            </div>
            <br />


            <div className="subtopico">
              <h2>15-Azure Files</h2>
              <p>
              O Azure Files oferece compartilhamentos de arquivos totalmente gerenciados na
nuvem com compartilhamentos que podem ser acessados usando o protocolo SMB (Server
Message Block). Montar compartilhamentos de arquivos do Azure é como se conectar a
compartilhamentos em uma rede local. 
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>16-Camada Hot</h2>
              <p>
              A camada Hoté otimizada para armazenar dados acessados com frequência. O nível de
acesso Cool tem um SLA de disponibilidade ligeiramente menor e custos de acesso mais altos
em comparação com dados quentes, que são compensações aceitáveis para custos de
armazenamento mais baixos. O armazenamento de arquivo armazena dados off-line e oferece
os menores custos de armazenamento, mas também os custos mais altos para reidratar e
acessar dados.
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>17-Assistente do Azure</h2>
              <p>
              O Assistente do Azure avalia seus recursos do Azure e faz recomendações para ajudar a
melhorar a confiabilidade, a segurança e o desempenho, alcançar a excelência operacional e
reduzir os custos. O Assistente do Azure foi projetado para ajudar você a poupar tempo na
otimização da nuvem. O serviço de recomendação inclui ações sugeridas que você pode adotar
imediatamente, adiar ou ignorar
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>18-Azure Monitor (Observabilidade)</h2>
              <p>
              O Azure Monitor é uma plataforma para coletar dados sobre seus recursos, analisar
esses dados, visualizar as informações e até mesmo agir com base nos resultados. 
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>19-Log Analytics</h2>
              <p>
              O Log Analytics do Azure é a ferramenta do portal do Azure em que você escreverá e
executará consultas de log nos dados coletados pelo Azure Monitor. O Log Analytics é uma
ferramenta robusta que dá suporte a consultas simples e complexas e à análise de dados. Você
pode escrever uma consulta simples que retorna um conjunto de registros e usar os recursos do
Log Analytics para classificá-los, filtrá-los e analisá-los. Você pode escrever uma consulta
avançada para executar a análise estatística e visualizar os resultados em um gráfico a fim de
identificar uma tendência específica. Independentemente de você trabalhar com os resultados
das suas consultas de maneira interativa ou usá-las com outros recursos do Azure Monitor,
como alertas de consulta de log ou pastas de trabalho, o Log Analytics é a ferramenta que você
usará para escrever e testar essas consultas.

              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>20-Application Insights</h2>
              <p>
              O Application Insights, um recurso do Azure Monitor, monitora seus aplicativos Web. O
Application Insights consegue monitorar aplicativos que estejam em execução no Azure,
localmente ou em outro ambiente de nuvem. Há duas maneiras de configurar o Application
Insights para ajudar a monitorar seu aplicativo. Você pode instalar um SDK em seu aplicativo ou
usar o agente do Application Insights. O agente do Application Insights é compatível com C#.NET,
VB.NET, Java, JavaScript, Node.js e Python.
Depois que o Application Insights estiver em execução, você poderá usá-lo para
monitorar uma ampla variedade de informações, como:
<br />
• As taxas, tempos de resposta e taxas de falha de solicitação.
<br />
• Taxas de dependência, tempos de resposta e taxas de falha: para mostrar se os
serviços externos estão desacelerando o desempenho.
<br />
• Exibições de página e o desempenho de carregamento relatados por
navegadores dos usuários.
<br />
• Chamadas AJAX de páginas da web, incluindo taxas, tempos de resposta e taxas
de falha.
<br />
• Contagens de sessão e usuários.
<br />
• Contadores de desempenho de máquinas de servidor Linux ou Windows server,
como CPU, memória e uso da rede.
<br />
O Application Insights não só ajuda a monitorar o desempenho do seu aplicativo, mas
você também pode configurá-lo para enviar periodicamente solicitações sintéticas para seu
aplicativo, permitindo que você verifique o status e monitore o aplicativo mesmo durante
períodos de baixa atividade.
<br />

              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>21-Azure Blueprints</h2>
              <p>
              Blueprint permite que um engenheiro ou arquiteto desenhe os parâmetros de um
projeto e os replique para criar outra configuração, o Azure Blueprints permite que arquitetos
de nuvem e grupos centrais de tecnologia da informação definam um conjunto repetitivo de
recursos do Azure que implementa e adere aos padrões, padrões e requisitos de uma
organização.
O Azure Blueprints permite que as equipes de desenvolvimento criem e iniciem novos
ambientes rapidamente, sabendo que eles são criados de acordo com as especificações da
organização e contêm um conjunto de componentes integrados, como redes, para acelerar o
desenvolvimento e a entrega.
O Blueprints é uma maneira declarativa de orquestrar a implementação de vários
modelos de recursos e outros artefatos, como:
<br />
• Atribuições de Funções
<br />
• Atribuições de Políticas
<br />
• Modelos do ARM (modelos do Azure Resource Manager)
<br />
• Grupos de recursos
<br />
O serviço do Azure BluePrint é apoiado pelo Azure Cosmos DB distribuído globalmente.
Objetos de blueprint são replicados para várias regiões do Azure. Essa replicação oferece baixa
latência, alta disponibilidade e acesso consistente a seus objetos de blueprint,
independentemente de em qual região o Azure Blueprints implanta seus recursos.
<br />
              </p>
            </div>
            <br />

            <div className="subtopico">
              <h2>22-Resource Health</h2>
              <p>
              Resource Health é uma exibição personalizada dos recursos reais do Azure. O Resource
Health ajuda a diagnosticar e obter suporte quando um problema do Azure afeta seus recursos.
              </p>
            </div>
            <br />
          </>
        )}
      </div>
    </div>
  );
}


//colocar uma barra para pesquisar os assuntos
//colocar termos em ingles em italico, paragrafo e negrito em alguns casos.
//refazer as habilidades necessárias, porque está faltando
//colocar links importantes
//fazer as perguntas
//organizar esse layt, porque esses quadrados estão feios
export default Home;
