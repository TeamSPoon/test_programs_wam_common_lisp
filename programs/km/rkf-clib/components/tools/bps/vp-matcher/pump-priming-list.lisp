;;;
;;; $Id: pump-priming-list.lisp,v 1.1024 2009/11/28 05:15:27 jchaw Exp $
;;;

(unless (find-package :km) (make-package :km))
(in-package :km)
(setq *using-km-package* t)

(defparameter *phys-halo-pump-prime-list* '(|y-speed|
|y-force-magnitude|
|y-distance|
|y-component-slot|
|y-acceleration-magnitude|
|x-speed|
|x-force-magnitude|
|x-distance|
|x-component-slot|
|x-acceleration-magnitude|
|weight-y-force-magnitude|
|weight-x-force-magnitude|
|weight-force|
|weight-force-magnitude|
|velocity|
|total-y-force-magnitude|
|total-x-force-magnitude|
|total-force|
|total-force-magnitude|
|tangential-y-force-magnitude|
|tangential-x-force-magnitude|
|tangential-force|
|tangential-force-magnitude|
|speed|
|normal-y-force-magnitude|
|normal-x-force-magnitude|
|normal-force|
|normal-force-magnitude|
|net-y-force-magnitude|
|net-x-force-magnitude|
|net-force|
|net-force-magnitude|
|initial-y-speed|
|initial-y-position|
|initial-x-speed|
|initial-x-position|
|initial-velocity|
|initial-time|
|initial-speed|
|initial-position|
|initial-acceleration|
|friction-y-force-magnitude|
|friction-x-force-magnitude|
|friction-force|
|friction-force-magnitude|
|frame-of-reference|
|force-magnitude|
|fixed-y-position|
|fixed-x-position|
|fixed-position|
|final-y-speed|
|final-y-position|
|final-x-speed|
|final-x-position|
|final-velocity|
|final-time|
|final-speed|
|final-position|
|final-acceleration|
|distance|
|displacement|
|direction|
|coefficient-of-static-friction|
|coefficient-of-kinetic-friction|
|average-y-speed|
|average-y-force-magnitude|
|average-y-acceleration-magnitude|
|average-x-speed|
|average-x-force-magnitude|
|average-x-acceleration-magnitude|
|average-velocity|
|average-speed|
|average-force|
|average-force-magnitude|
|average-acceleration|
|average-acceleration-magnitude|
|applied-y-force-magnitude|
|applied-x-force-magnitude|
|applied-force|
|applied-force-magnitude|
|apex-velocity|
|apex-duration|
|apex-displacement|
|apex-acceleration|
|acceleration|
|acceleration-magnitude|
|Wagon|
|Vertex|
|Velocity-Vector-Value|
|UoM-Force|
|Truck|
|Triangle|
|Train|
|Time-Constant|
|Table|
|Square|
|Runner|
|Rope|
|Rocket|
|Rock|
|River|
|Right-Triangle|
|Rectangle|
|Ray|
|Quadrilateral|
|Pulley|
|Property-Vector-Value|
|Position-Constant|
|Polygon|
|Point|
|Move|
|Line|
|Line-Segment|
|Ice|
|Hollow-Ball|
|Helicopter|
|Geometric-Object|
|Force-Vector-Value|
|Force-Value|
|Force-Scale|
|Force-Magnitude-Value|
|Force-Constant|
|Feather|
|Exert-Force|
|Displacement-Vector-Value|
|Cyclist|
|Coefficient-of-Friction-Value|
|Coefficient-of-Friction-Scale|
|Coefficient-of-Friction-Constant|
|Circle|
|Car|
|Bullet|
|Bowling-Ball|
|Boat|
|Block-Object|
|Bird|
|Bicycle|
|Baseball|
|Airplane|
|Acceleration-Vector-Value|
))

(defparameter *chem-halo-pump-prime-list* '(|treatment|
|symbol|
|subscript|
|string-name|
|solute-species|
|solubility|
|scalar-concentration|
|salt-status|
|reaction-direction|
|post-hoc-analysis|
|pkb|
|pka|
|parent_formula|
|paraphrase-encoded-question|
|pOH|
|oxidation-state|
|oxidation-state-changes|
|oxidation-number|
|original-question|
|notes-on-solution|
|notes-on-paraphrase-encoding|
|net-ionic-equation|
|multiplier|
|low-high-conductivity-scale|
|lewis-base-strength|
|lewis-acid-strength|
|ki|
|keq|
|keq-expression|
|kb|
|kb-expression|
|ka|
|ka-expression|
|is-identical-to|
|has-solvent|
|has-solute|
|has-molecular-name|
|has-conjugate|
|has-acid-name|
|equilibrium-concentration|
|electrolyte-status|
|ease-of-oxidation|
|default-kb|
|default-ka|
|context|
|conductivity|
|concentration|
|computed-value|
|completeness|
|complete-ionic-equation|
|coefficient|
|chemical-equation|
|basic-acidic-scale|
|auxiliary-questions|
|Zr|
|Zr-Substance|
|Zn|
|Zn-Substance|
|Zn-Plus-2|
|Y|
|Y-Substance|
|Xe|
|Xe-Molecule|
|Weak-Electrolyte|
|Weak-Electrolyte-Solute-Species|
|Weak-Electrolyte-Entity|
|W|
|W-Substance|
|VOCl|
|VOCl-Substance|
|VIIIB-Element|
|VIIIA-Noble-Gas-Element|
|VIIB-Element|
|VIIA-Halogen-Element|
|VIB-Element|
|VIA-Chalcogen-Element|
|VB-Element|
|VA-Element|
|V|
|V-Substance|
|V-Plus|
|UoM-Conductivity|
|UoM-Concentration|
|Typical-Instance|
|Tl|
|Tl-Substance|
|Ti|
|Ti-Substance|
|Te|
|Te-Substance|
|Tc|
|Tc-Substance|
|Ta|
|Ta-Substance|
|Subscript-Value|
|Subatomic-Particle|
|Strong-Electrolyte|
|Strong-Electrolyte-Solution|
|Strong-Electrolyte-Solute-Species|
|Strong-Electrolyte-Entity|
|Sr_OH_2|
|Sr_OH_2-Substance|
|Sr|
|Sr-Substance|
|Sr-Plus-2|
|Spill|
|Solution|
|Solute|
|Solute-Species-Entity|
|Soluble-Substance|
|Solubility-Value|
|Solubility-Constant|
|Sn_NO3_2|
|Sn_NO3_2-Substance|
|Sn|
|Sn-Substance|
|Sn-Plus-2|
|SiF6-Minus-2|
|Si|
|Si-Substance|
|Sg|
|Sg-Substance|
|SeO4-Minus-Substance|
|SeO4-Minus-2|
|SeO3-Minus-2|
|SeO3-Minus-2-Substance|
|Se|
|Scalar-Concentration-Value|
|Sc|
|Sc-Substance|
|Sb|
|Sb-Substance|
|Salt|
|Salt-Substance|
|Salt-Status-Value|
|Salt-Status-Constant|
|SO4-Minus-2|
|SO4-Minus-2-Substance|
|SO3|
|SO3-Substance|
|SO3-Minus-2|
|SO3-Minus-2-Substance|
|SO2|
|SO2-Substance|
|S|
|S-Substance|
|S-Molecule|
|S-Minus-2|
|S-Minus-2-Substance|
|Ru|
|Ru-Substance|
|Rn|
|Rn-Molecule|
|Rh|
|Rh-Substance|
|Rf|
|Rf-Substance|
|Reaction|
|Reaction-Result|
|Reaction-Participant|
|Reaction-Material|
|Reaction-Direction-Value|
|Reaction-Direction-Constant|
|Reaction-1N2_1H2O--1N2_1H2O|
|Reaction-1Fe_1H2O--1Fe_1H2O|
|Re|
|Re-Substance|
|RbOH|
|RbOH-Substance|
|Rb|
|Rb-Substance|
|Rb-Plus|
|Ra|
|Ra-Substance|
|Ra-Plus-2|
|Pt|
|Pt-Substance|
|Pt-Plus-2|
|Proton|
|Precipitate|
|Polyprotic-Acid|
|Polyprotic-Acid-Compound|
|Po|
|Po-Substance|
|Pd|
|Pd-Substance|
|Pb_OH_2|
|Pb_OH_2-Substance|
|Pb_NO3_2|
|Pb_NO3_2-Substance|
|PbSO4|
|PbSO4-Substance|
|PbS|
|PbS-Substance|
|PbO|
|PbO-Substance|
|Pb|
|Pb-Substance|
|Pb-Plus-2|
|POH-Value|
|PO4-Minus-3|
|PO4-Minus-3-Substance|
|PO3-Minus-3|
|PKb-Value|
|PKa-Value|
|P2O7-Minus-4|
|P|
|P-Substance|
|P-Molecule|
|Oxidation-State-Value|
|Oxidation-Scale|
|Oxidation-Constant|
|Os|
|Os-Substance|
|Organic-Molecule-Substance|
|OH-Minus|
|OCl-Minus|
|O2|
|O2-Substance|
|O2-Minus-2|
|O|
|O-Minus|
|O-Minus-2|
|Nonmetal-Nonmetal-Reaction|
|Nonelectrolyte|
|Non-Metal|
|Non-Metal-Molecule|
|Non-Metal-Atom|
|Ni|
|Ni-Substance|
|Ni-Plus-2|
|Ne|
|Ne-Molecule|
|Nb|
|Nb-Substance|
|NaOH|
|NaOH-Substance|
|NaOCl|
|NaOCl-Substance|
|NaNO3|
|NaNO3-Substance|
|NaN3|
|NaI|
|NaI-Substance|
|NaHCO3|
|NaHCO3-Substance|
|NaHCO3-Solution|
|NaF-Substance|
|NaCl|
|NaCl-Substance|
|Na2SO4|
|Na2S-Substance|
|Na2S|
|Na2CO3|
|Na2CO3-Substance|
|Na2CO3-Solution|
|Na|
|Na-Substance|
|Na-Plus|
|NO3-Minus|
|NO2|
|NO2-Substance|
|NO2-Plus|
|NO2-Minus|
|NO2-Minus-Substance|
|NO|
|NO-Substance|
|NH4_3_PO4|
|NH4_3_PO4-Substance|
|NH4_2_SO4|
|NH4NO3|
|NH4NO3-Substance|
|NH4Cl|
|NH4Cl-Substance|
|NH4-Plus|
|NH4-Plus-Substance|
|NH3CH3-Plus|
|NH3|
|NH3-Substance|
|NH2-Minus|
|N3-Minus|
|N3-Minus-Substance|
|N2O|
|N2|
|N2-Substance|
|N|
|N-Minus-3|
|Mt|
|Mt-Substance|
|Monoprotic-Acid|
|Monoprotic-Acid-Compound|
|Monoatomic-Molecule|
|Molecule|
|Molecule-Substance|
|Mo|
|Mo-Substance|
|MnO4-Minus|
|Mn|
|Mn-Substance|
|Mn-Plus|
|Mn-Plus-3|
|Mn-Plus-2|
|Mixture|
|Mix|
|MgSO4|
|MgSO4-Substance|
|MgO|
|MgO-Substance|
|Mg|
|Mg-Substance|
|Mg-Plus-2|
|Metalloid|
|Metalloid-Atom|
|Metal|
|Metal-Cation|
|Metal-Atom|
|Lu|
|Lu-Substance|
|Lr|
|Lr-Substance|
|LiOH|
|LiOH-Substance|
|LiF|
|Li2CO3|
|Li2CO3-Substance|
|Li|
|Li-Substance|
|Li-Plus|
|Lewis-Base-Strength-Value|
|Lewis-Base-Strength-Constant|
|Lewis-Acid-Strength-Value|
|Lewis-Acid-Strength-Constant|
|Kr|
|Kr-Molecule|
|KOH|
|KOH-Substance|
|KI-Scale|
|KI-Constant|
|KI-Compound|
|KI-Compound-Substance|
|K2SO4|
|K2SO4-Substance|
|K2CrO4|
|K2CrO4-Substance|
|K2CO3|
|K2CO3-Substance|
|K|
|K-Substance|
|K-Plus|
|Ir|
|Ir-Substance|
|Ionic-Substance|
|Ionic-Compound|
|Ionic-Compound-Substance|
|Ion|
|Inorganic-Molecule|
|Inorganic-Molecule-Substance|
|In|
|In-Substance|
|Identify-Reaction|
|Identify-Chemical|
|Identify-Chemical-Entity|
|IVB-Element|
|IVA-Element|
|IO6-Minus-5|
|IO3-Minus|
|IO-Minus|
|IO-Minus-Substance|
|IIIB-Element|
|IIIA-Element|
|IIB-Element|
|IIA-Alkaline-Earth-Metal-Element|
|IB-Element|
|IA-Alkali-Metal-Element|
|I2|
|I|
|I-Minus|
|Hydrolysis|
|Hydrolysis-Base-Reactant|
|Hydrolysis-Acid-Reactant|
|Hydrocarbon-Substance|
|Hydrocarbon-Molecule|
|Hs|
|Hs-Substance|
|Hg2-Plus-2|
|Hg|
|Hg-Substance|
|Hg-Plus|
|Hg-Plus-2|
|Hf|
|Hf-Substance|
|He|
|He-Molecule|
|HSeO4-Minus|
|HSeO4-Minus-Substance|
|HSeO3-Minus|
|HSeO3-Minus-Substance|
|HSO4-Minus|
|HSO4-Minus-Substance|
|HSO3-Minus|
|HSO3-Minus-Substance|
|HS-Minus|
|HS-Minus-Substance|
|HPO4-Minus-2|
|HPO4-Minus-2-Substance|
|HPO3-Minus-2|
|HONH3-Plus|
|HONH2|
|HONH2-Substance|
|HO2-Minus|
|HO2-Minus-Substance|
|HNO3|
|HNO3-Substance|
|HNO2|
|HNO2-Substance|
|HN3|
|HN3-Substance|
|HIO3|
|HIO3-Substance|
|HIO|
|HIO-Substance|
|HI|
|HI-Substance|
|HF-Compound|
|HF-Compound-Substance|
|HCrO4-Minus|
|HCrO4-Minus-Substance|
|HClO4|
|HClO4-Substance|
|HClO3|
|HClO3-Substance|
|HClO2|
|HClO|
|HClO-Substance|
|HCl|
|HCl-Substance|
|HCO3-Minus|
|HCO3-Minus-Substance|
|HCNO|
|HCNO-Substance|
|HCN|
|HCN-Substance|
|HCHO2|
|HCHO2-Substance|
|HC6H6O6-Minus|
|HC6H6O6-Minus-Substance|
|HC6H5O7-Minus-2|
|HC6H5O7-Minus-2-Substance|
|HC4H4O6-Minus|
|HC4H4O6-Minus-Substance|
|HC3H2O4-Minus|
|HC3H2O4-Minus-Substance|
|HC2O4-Minus|
|HC2O4-Minus-Substance|
|HC2H2O2Cl|
|HC2H2O2Cl-Substance|
|HBrO|
|HBrO-Substance|
|HBr|
|HBr-Substance|
|HBO3-Minus-2|
|HAsO4-Minus-2|
|HAsO4-Minus-2-Substance|
|H5IO6|
|H5IO6-Substance|
|H4P2O7|
|H4P2O7-Substance|
|H4IO6-Minus|
|H4IO6-Minus-Substance|
|H3PO4|
|H3PO4-Substance|
|H3PO3|
|H3P2O7-Minus|
|H3P2O7-Minus-Substance|
|H3O-Plus|
|H3O-Plus-Substance|
|H3NOH-Plus|
|H3IO6-Minus-2|
|H3IO6-Minus-2-Substance|
|H3C6H5O7|
|H3C6H5O7-Substance|
|H3BO3|
|H3BO3-Substance|
|H3AsO4|
|H3AsO4-Substance|
|H3AsO3|
|H3AsO3-Substance|
|H2SiF6|
|H2SiF6-Substance|
|H2SeO3|
|H2SeO3-Substance|
|H2SO4|
|H2SO4-Substance|
|H2SO3|
|H2SO3-Substance|
|H2S|
|H2S-Substance|
|H2PO4-Minus|
|H2PO4-Minus-Substance|
|H2PO3-Minus|
|H2P2O7-Minus-2|
|H2P2O7-Minus-2-Substance|
|H2O2|
|H2O2-Substance|
|H2O|
|H2O-Substance|
|H2NNH3-Plus|
|H2NNH3-Plus-Substance|
|H2NNH2|
|H2NNH2-Substance|
|H2CO3|
|H2CO3-Substance|
|H2C6H6O6|
|H2C6H6O6-Substance|
|H2C6H5O7-Minus|
|H2C6H5O7-Minus-Substance|
|H2C4H4O6|
|H2C4H4O6-Substance|
|H2C2O4|
|H2C2O4-Substance|
|H2BO3-Minus|
|H2BO3-Minus-Substance|
|H2AsO4-Minus|
|H2AsO4-Minus-Substance|
|H2AsO3-Minus|
|H2AsO3-Minus-Substance|
|H2|
|H2-Substance|
|H|
|H-Plus|
|H-Plus-Substance|
|H-Minus|
|Ge|
|Ge-Substance|
|Gas-Water-Reaction-b|
|Gas-Water-Reaction-a|
|Gas-Solution-Reaction-b|
|Gas-Solution-Reaction-a|
|Ga|
|Ga-Substance|
|Fr|
|Fr-Substance|
|Fr-Plus|
|Format-Equation|
|Fe_OH_3|
|Fe_OH_3-Substance|
|Fe_OH_2|
|Fe_OH_2-Substance|
|Fe_H2O_6-Plus-3|
|Fe_H2O_5-OH-Plus-2|
|Fe_Cl_2|
|FeCl3|
|FeBr3|
|Fe3O4|
|Fe3O4-Substance|
|Fe2O3|
|Fe2O3-Substance|
|Fe|
|Fe-Substance|
|Fe-Plus-3|
|Fe-Plus-2|
|F2|
|F-Minus|
|F-Minus-Substance|
|Equilibrium-Reaction|
|Equilibrium-Constant-Value|
|Equilibrium-Constant-Expression|
|Electronegativity-Value|
|Electronegativity-Constant|
|Electron|
|Electrolyte|
|Electrolyte-Status-Value|
|Electrolyte-Status-Constant|
|Electrolyte-Entity|
|Ease-Of-Oxidation-Value|
|Ease-Of-Oxidation-Constant|
|Dissolve|
|Dissociation-Reaction|
|Dissociation-Constant-Value|
|Diprotic-Acid|
|Diprotic-Acid-Compound|
|Decomposition-Reaction|
|Db|
|Db-Substance|
|Cu_OH_2|
|Cu_OH_2-Substance|
|Cu_CH3COO_2|
|Cu_CH3COO_2-Substance|
|CuSO4|
|CuSO4-Substance|
|CuO|
|CuO-Substance|
|CuCl2|
|Cu|
|Cu-Substance|
|Cu-Plus|
|Cu-Plus-2|
|CsOH|
|CsOH-Substance|
|Cs|
|Cs-Substance|
|Cs-Plus|
|CrO4-Minus-2|
|CrO4-Minus-2-Substance|
|Cr2O7-Minus-2|
|Cr|
|Cr-Substance|
|Cr-Plus-3|
|Conservation-of-Volume|
|Conductivity-Value|
|Conductivity-Scale|
|Conductivity-Constant|
|Concentration-Value|
|Concentration-Constant|
|Compute-Volume-from-Concentration-and-Quantity|
|Compute-Quantity-of-Chemical-in-Chemicals|
|Compute-Quantity-of-Chemical-in-Chemical|
|Compute-Quantity-of-Chemical-Substance|
|Compute-Quantity-of-Chemical-Object|
|Compute-Quantity-from-Reaction|
|Compute-Quantity-from-Concentration-and-Volume|
|Compute-Nested-Formula-from-Has-Chemical-Formula|
|Compute-Nested-Atomic-Formula-from-Formula|
|Compute-Molecule-from-Formula|
|Compute-Molecule-from-Chemical-Name|
|Compute-Mole-from-Weight-and-Chemical|
|Compute-Ionic-Compound-from-Formula|
|Compute-Ionic-Compound-from-Chemical-Name|
|Compute-Ionic-Compound-Parts-from-Nested-Formula|
|Compute-Equilibrium-Position|
|Compute-Equilibrium-Expression|
|Compute-Equilibrium-Constant|
|Compute-Element-from-Name|
|Compute-Element-from-Molecular-Name|
|Compute-Concentration-from-Quantity-and-Volume|
|Compute-Concentration-Change-Constant|
|Compute-Compound-from-Common-Name|
|Compute-Compound-from-Common-Formula|
|Compute-Compound-from-Chemical-Name|
|Compute-Compound-from-Chemical-Formula|
|Compute-Compound-Computing-Method-from-Name|
|Compute-Compound-Computing-Method-from-Formula|
|Compute-Complete-Atomic-Chemical-Formula|
|Compute-Chemical-Name-from-Ion-of-Acid-Compound|
|Compute-Chemical-Name-from-Formula-of-Ionic-Compound|
|Compute-Chemical-Ion-from-Name|
|Compute-Chemical-Formula-of-Ionic-Compound|
|Compute-Chemical-Entity|
|Compute-Balanced-Equation|
|Compute-Atomic-Weight-from-Chemical|
|Compute-Atomic-Formula-from-Nested-Formula|
|Compute-Acid-Ion-from-Name|
|Compute-Acid-Compound-from-Formula|
|Compute-Acid-Compound-from-Chemical-Name|
|Completeness-Scale|
|Completeness-Constant|
|Combination-Reaction|
|Coefficient-Value|
|Co|
|Co-Substance|
|Co-Plus-2|
|ClO4-Minus|
|ClO3-Minus|
|ClO2-Minus|
|ClO2-Minus-Substance|
|ClO-Minus|
|ClO-Minus-Substance|
|Cl2|
|Cl|
|Cl-Minus|
|Chemical|
|Chemical-Equation-Expression|
|Chemical-Entity|
|Charge-Value|
|Charge-Constant|
|Cd|
|Cd-Substance|
|Cd-Plus-2|
|Cation|
|Cation-Substance|
|Ca_OH_2|
|Ca_OH_2-Substance|
|Ca_OCl_2|
|Ca_OCl_2-Substance|
|CaO|
|CaO-Substance|
|CaCO3|
|CaCO3-Substance|
|Ca|
|Ca-Substance|
|Ca-Plus-2|
|CO3-Minus-2|
|CO3-Minus-2-Substance|
|CO2|
|CO2-Substance|
|CO-Compound|
|CO-Compound-Substance|
|CNO-Minus|
|CNO-Minus-Substance|
|CN-Minus|
|CN-Minus-Substance|
|CHO2-Minus|
|CHO2-Minus-Substance|
|CH4|
|CH4-Substance|
|CH3_3_NH-Plus|
|CH3_3_N|
|CH3_3_N-Substance|
|CH3_2_NH2-Plus|
|CH3_2_NH|
|CH3_2_NH-Substance|
|CH3OH|
|CH3OH-Substance|
|F|
|CH3NH3Cl|
|CH3NH3Cl-Substance|
|CH3NH3-Plus|
|CH3NH3-Plus-Substance|
|CH3NH2|
|CH3NH2-Substance|
|CH3COONa|
|CH3COONa-Substance|
|CH3COOH|
|CH3COOH-Substance|
|CH3COOCH2CH3|
|CH3COO-Minus|
|CH3COO-Minus-Substance|
|CH3CHOHCOOH|
|CH3CHOHCOOH-Substance|
|CH3CH2OH|
|CH3CH2OH-Substance|
|CH3CH2NH3-Plus|
|CH3CH2COOH|
|CH3CH2COOH-Substance|
|CH3-Plus|
|CH3-Minus|
|CH2_COOH_2|
|CH2_COOH_2-Substance|
|C8H18|
|C8H18-Substance|
|C7H5O2-Minus|
|C7H5O2-Minus-Substance|
|C7H5O-Minus|
|C6H6O6-Minus-2|
|C6H6O6-Minus-2-Substance|
|C6H5OH|
|C6H5OH-Substance|
|C6H5O7-Minus-3|
|C6H5O7-Minus-3-Substance|
|C6H5O-Minus|
|C6H5O-Minus-Substance|
|C6H5NH3-Plus|
|C6H5NH2|
|C6H5NH2-Substance|
|C6H5COOH|
|C6H5COOH-Substance|
|C6H12O6|
|C6H12O6-Substance|
|C5H5NH-Plus|
|C5H5N|
|C5H5N-Substance|
|C5H12|
|C5H12-Substance|
|C4H7O2-Minus|
|C4H7O2-Minus-Substance|
|C4H4O6-Minus-2|
|C4H4O6-Minus-2-Substance|
|C3H8|
|C3H8-Substance|
|C3H7OH|
|C3H7OH-Substance|
|C3H6|
|C3H6-Substance|
|C3H5O3-Minus|
|C3H5O3-Minus-Substance|
|C3H5O2-Minus|
|C3H5O2-Minus-Substance|
|C3H2O4-Minus-2|
|C3H2O4-Minus-2-Substance|
|C2O4-Minus-2|
|C2O4-Minus-2-Substance|
|C2H6|
|C2H6-Substance|
|C2H5NH3-Plus|
|C2H5NH2|
|C2H5NH2-Substance|
|C2H5COO-Minus|
|C2H5COO-Minus-Substance|
|C2H4|
|C2H4-Substance|
|C2H3O2-Minus|
|C2H2O2Cl-Minus|
|C2H2O2Cl-Minus-Substance|
|C12H22O11|
|C12H22O11-Substance|
|C10H22|
|C10H22-Substance|
|C|
|C-Substance|
|C-Molecule|
|Bronsted-Lowry-Base|
|Bronsted-Lowry-Acid|
|Bronsted-Lowry-Acid-Compound|
|BrO-Minus|
|BrO-Minus-Substance|
|Br2|
|Br2-Substance|
|Br|
|Br-Minus|
|Bi|
|Bi-Substance|
|Bh|
|Bh-Substance|
|Be|
|Be-Substance|
|Be-Plus-2|
|Base|
|Base-Role|
|Balance-Equation|
|Ba_OH_2|
|Ba_OH_2-Substance|
|Ba_NO3_2|
|Ba_NO3_2-Substance|
|BaSO4|
|BaSO4-Substance|
|BaCl2|
|BaCl2-Substance|
|Ba|
|Ba-Substance|
|Ba-Plus-2|
|BO3-Minus-3|
|B|
|B-Substance|
|AuCl4-Minus|
|AuCl3|
|Au|
|Au-Substance|
|Au-Plus-3|
|Au-Plus-2|
|Atomic-Weight-Value|
|Atomic-Weight-Constant|
|Atomic-Number-Value|
|Atomic-Number-Constant|
|At|
|At-Substance|
|AsO4-Minus-3|
|AsO4-Minus-3-Substance|
|AsO3-Minus-3|
|As|
|As-Substance|
|As-Plus-3|
|Ar|
|Ar-Molecule|
|Aqueous-Solution|
|Anion|
|Anion-Substance|
|Amphoteric-Substance|
|Amphoteric-Anion-Substance|
|AlCl3|
|AlCl3-Substance|
|Al2O3|
|Al2O3-Substance|
|Al|
|Al-Substance|
|Al-Plus-3|
|Ag3PO4|
|Ag|
|Ag-Substance|
|Ag-Plus|
|Add|
|Add-Volumes|
|Acid|
|Acid-Splash-on-Skin|
|Acid-Spill|
|Acid-Role|
|Acid-Dissociation-Reaction|
|Acid-Compound|
|A|
))

(defparameter *bio-halo-pump-prime-list* '(|structural-complexity|
|simple-complex-scale|
|optical-resolution|
|magnification|
|Unicellular-Organism|
|Typical-Instance|
|Translocation|
|Tissue|
|Termination|
|Synthesis|
|Suborganismal-Entity|
|Subcellular-Entity|
|Structural-Complexity-Value|
|Structural-Complexity-Scale|
|Structural-Complexity-Constant|
|Protist|
|Prokaryote|
|Pore|
|Plant|
|Photosynthesis|
|Peptide-Bond-Formation|
|P-Site|
|Organismal-Region|
|Organism|
|Organic-Structure|
|Organ|
|Optical-Resolution-Scale|
|Optical-Resolution-Constant|
|Nutrient|
|Membrane|
|Membrane-Enclosure|
|Magnification-Scale|
|Magnification-Constant|
|Lipid|
|Initiation|
|Grow|
|GTP|
|Fungus|
|Event|
|Eukaryote|
|Entity|
|Elongation|
|Ecological-Relationship|
|Ecological-Region|
|E-Site|
|Codon|
|Codon-Recognition|
|Cellular-Region|
|Biological-Region|
|Bacterium|
|Atom|
|Archaea|
|Animal|
|Amino-Acid|
|A-Site|
|5-Prime-Nucleotide|
|5-Prime-End|
|3-Prime-End|
))

(defparameter *bio-lbr-pump-prime-list* '(|position|
|Valve|
|VIA-Chalcogen-Element|
|Toe|
|Tissue|
|Shoulder|
|Shoe|
|Pumping|
|Pumping-Device|
|Protect|
|Position-Value|
|Position-Constant|
|Performer|
|O|
|Non-Metal-Atom|
|Neck|
|Musician|
|Musical-Instrument|
|Music|
|Muscle|
|Listener|
|Leg|
|Internal-Organ|
|Head|
|Hand|
|Foot|
|Flow|
|Finger|
|Expand|
|Contract|
|Clothing|
|Chemical-Entity|
|Chamber|
|Body|
|Body-Part|
|Atomic-Number-Value|
|Atom|
|Arm|
))

(defparameter *engine-lbr-pump-prime-list* '(|history|
|Engine|
|Cycle|
|Combust|
))

(defparameter *science-shared-pump-prime-list* '(|term|
|pH|
|nested-atomic-chemical-formula|
|has-ion|
|has-chemical-name|
|has-chemical-formula|
|has-atom|
|electronegativity|
|chemical-period|
|charge|
|atomic-weight|
|atomic-symbol|
|atomic-number|
|atomic-chemical-formula|
|Suborganismal-Entity|
|PH-Value|
|PH-Scale|
|PH-Constant|
|Organic-Molecule|
|Multicellular-Organism|
|Molecule|
|Inorganic-Molecule|
|Chemical-Formula|
|Chemical-Entity|
|Atom|
))

(defparameter *clib-list* '(|young-old-scale|
|worth|
|wn20-synset|
|wn16-synset|
|width|
|wetness|
|weak-strong-scale|
|volume|
|voltage|
|viewpoint-target|
|viewpoint-source|
|viewpoint-score|
|viewpoint-scenario|
|viewpoint-question|
|viewpoint-question-title|
|viewpoint-query|
|viewpoint-parent|
|viewpoint-multislot-type|
|viewpoint-model-graph|
|viewpoint-filter|
|viewpoint-eq-solver-info|
|viewpoint-detail|
|viewpoint-detail-title|
|viewpoint-correspondence|
|viewpoint-answerable-query|
|viewpoint-answer|
|viewpoint-answer-title|
|viewpoint-answer-page|
|viewed-as|
|value|
|user-description|
|user-comment|
|user-assumption|
|unit|
|unimportant-important-scale|
|typical-instance|
|truth|
|trait|
|toward|
|to-value|
|tiny-huge-scale|
|time-value|
|time-of-existence|
|time-is-inside|
|time-int-starts|
|time-int-overlaps|
|time-int-meets|
|time-int-finishes|
|time-int-equals|
|time-int-during|
|time-int-contains|
|time-int-before|
|time-inside|
|time-ends|
|time-during|
|time-between|
|time-begins|
|time-begins-or-in|
|time-before|
|time-at|
|time-after|
|thin-thick-scale|
|thickness|
|texture|
|text-subj|
|text-subj-phrase|
|text-slot|
|text-sentence|
|text-premodslots|
|text-premods|
|text-postmodslots|
|text-postmods|
|text-phrase|
|text-passive-verbseq|
|text-passive-verbseq-sg|
|text-passive-verbseq-pl|
|text-passive-sentence|
|text-passive-phrase|
|text-particle|
|text-number|
|text-nominalization|
|text-nom-sentence|
|text-indef-phrase|
|text-indef-head|
|text-indef-determiner|
|text-head|
|text-gloss|
|text-gen|
|text-existential-there|
|text-dobj|
|text-dobj-phrase|
|text-description|
|text-definition-sentence|
|text-def-head|
|text-def-determiner|
|text-base-phrase|
|text-arguments|
|text-argslots|
|text-active-verbseq|
|text-active-verbseq-sg|
|text-active-verbseq-pl|
|text-active-sentence|
|text-active-phrase|
|test-case|
|temperature|
|taste|
|target-unit|
|supports|
|substrate|
|subevent|
|speed|
|space-int-overlap|
|space-int-meet|
|space-int-equal|
|space-int-disjoint|
|space-int-covers|
|space-int-contains|
|soft-pcs-list|
|smell|
|small-large-scale|
|slow-fast-scale|
|slot-gloss|
|slope|
|skolem-string|
|size|
|site|
|short-tall-scale|
|short-long-scale|
|shape|
|shallow-deep-scale|
|sex|
|sentience|
|secondary-slot|
|scale-class|
|scalar-value|
|scalar-constant|
|scalar-constant-class|
|same-type|
|same-as|
|rotational-rate|
|resulting-state|
|result|
|required-slot|
|related-to|
|reference-class|
|recipient|
|raw-material|
|rate|
|rare-dense-scale|
|range2|
|radius|
|quantity|
|purpose|
|property-sum|
|property-slot|
|property-of-slot|
|priority|
|primitive-actions|
|primary-slot|
|prevents|
|pressure|
|preparatory-event|
|preferred-unit|
|power|
|possesses|
|polarity|
|plays|
|physical-state|
|perimeter|
|path|
|output|
|origin|
|orientation|
|often-never-scale|
|objective|
|object|
|numeric-value|
|number-of-elements|
|none-unlimited-scale|
|next-event|
|next-element|
|near-far-scale|
|narrow-wide-scale|
|momentum|
|moment-of-inertia|
|min-value|
|microscopic-gigantic-scale|
|mcs-list|
|max-value|
|material|
|mass|
|manner|
|luminous-intensity|
|luminous-flux|
|luminance|
|low-urgent-scale|
|longitude|
|location|
|little-gigantic-scale|
|light-hefty-scale|
|length|
|latitude|
|kreq-list|
|is-west-of|
|is-southwest-of|
|is-over|
|is-outside|
|is-oriented-toward|
|is-opposite|
|is-on|
|is-northwest-of|
|is-north-of|
|is-near|
|is-inside|
|is-facing|
|is-between|
|is-beside|
|is-behind|
|is-at|
|is-along|
|is-above|
|interrupted-by|
|intensity|
|integrity|
|instrument|
|input2|
|input|
|inhibits|
|information-language|
|information-content|
|in-organization|
|in-event|
|importance|
|impermeable-permeable-scale|
|identifier|
|identification-status|
|horizontal-vertical-scale|
|height|
|has-structural-part|
|has-region|
|has-part|
|has-goal|
|has-functional-part|
|has-example|
|has-basic-structural-unit|
|has-basic-functional-unit|
|greater-than|
|greater-than-or-equal-to|
|from-value|
|frequency|
|freezing-boiling-scale|
|forever-brief-scale|
|first-subevent|
|first-element|
|feature-slot|
|experiencer|
|exclusive-constants|
|equation|
|equation-uses|
|equation-symbol|
|equation-expression|
|enables|
|element|
|edit-state|
|duration|
|dry-wet-scale|
|donor|
|doc-file|
|distance|
|disjunctive-next-events|
|direction|
|diameter|
|destination|
|description|
|depth|
|density|
|defeats|
|defeated-by-class|
|dcs-list|
|dark-blinding-scale|
|content|
|consistency|
|component|
|complement|
|color|
|cold-hot-scale|
|cmap-correspondence|
|circumference|
|causes|
|caused-by-class|
|categorical-value|
|categorical-constant|
|categorical-constant-class|
|cardinal-value|
|cardinal-unit-class|
|capacity|
|capability|
|by-means-of|
|brightness|
|breakable-unbreakable-scale|
|breakability|
|beneficiary|
|base|
|away-from|
|area|
|animacy|
|angle|
|all-subevents|
|agent|
|age|
|actions|
|acceleration|
|acceleration-magnitude|
|abuts|
|Yes-No-Viewpoint|
|Write|
|Worth-Value|
|Worth-Scale|
|Worth-Constant|
|Workgroup|
|Wood|
|Withdraw|
|Winner|
|Width-Scale|
|Width-Constant|
|Wetness-Value|
|Wetness-Scale|
|Wetness-Constant|
|Wet|
|Water|
|Waste|
|Wall|
|Walk|
|Volume-Value|
|Volume-Scale|
|Volume-Constant|
|Voltage-Value|
|Voltage-Constant|
|Viewpoint|
|Viewpoint-Query-Type|
|View|
|Velocity-Scale|
|Velocity-Constant|
|Vehicle|
|UoM-Worth|
|UoM-Volume|
|UoM-Voltage|
|UoM-Unitless|
|UoM-Time|
|UoM-Temperature|
|UoM-Speed|
|UoM-Rotational-Rate|
|UoM-Rate|
|UoM-Quantity|
|UoM-Pressure|
|UoM-Power|
|UoM-Momentum|
|UoM-Moment-of-Inertia|
|UoM-Mass|
|UoM-Luminous-Intensity|
|UoM-Luminous-Flux|
|UoM-Luminance|
|UoM-Length|
|UoM-Intensity|
|UoM-Frequency|
|UoM-Duration|
|UoM-Density|
|UoM-Coordinate|
|UoM-Brightness|
|UoM-Area|
|UoM-Angle|
|UoM-Acceleration-Magnitude|
|Unrestrain|
|Unobstruct|
|University|
|Unitless-Value|
|Unit-of-Measurement|
|Unit-Conversion|
|Unblock|
|Unauthorized|
|Typical-Instance|
|Truth-Value|
|Truth-Constant|
|Trespass|
|Transmit|
|Transfer|
|Trait-Value|
|Trait-Constant|
|Training|
|Tissue|
|Time-Zone-Constant|
|Time-Interval|
|Time-Instant|
|Throw|
|Thickness-Scale|
|Thickness-Constant|
|Texture-Value|
|Texture-Constant|
|Text-Field|
|Territory|
|Temporal-Relation|
|Temporal-Entity|
|Template|
|Temperature-Value|
|Temperature-Scale|
|Temperature-Constant|
|Team|
|Teacher|
|Teach|
|Taste-Value|
|Taste-Constant|
|Target|
|Tangible-Entity|
|Take|
|Take-In|
|Take-Control|
|Take-Apart|
|System|
|Support|
|Supply|
|Supper|
|Sum|
|Suggestion|
|Suggest|
|Substance|
|Store|
|Stone|
|State|
|State-Value|
|State-Constant|
|Stand-Up|
|Speed-Value|
|Specify|
|Specification|
|Speak|
|Spatial-Relation|
|Spatial-Entity|
|Sound|
|Solid-Substance|
|Smell-Value|
|Smell-Constant|
|Slot|
|Slot-Value-Viewpoint|
|Slot-Query-Viewpoint|
|Slope-Scale|
|Slope-Constant|
|Slide|
|Size-Value|
|Size-Scale|
|Size-Constant|
|Sit-Down|
|Signal|
|Shut-Out|
|Shipping|
|Shelf|
|Shape-Value|
|Shape-Constant|
|Shaken-Slot-Group|
|Sex-Value|
|Sex-Constant|
|Session|
|Service|
|Sequence|
|Sentience-Value|
|Sentience-Constant|
|Sense|
|Send|
|Selling|
|Sell|
|Selection|
|Select|
|See|
|Seat|
|Scale|
|Scalar|
|Ruin|
|Rubber|
|Rotational-Rate-Value|
|Rotational-Rate-Constant|
|Rotate|
|Room|
|Roof|
|Role|
|Restrain|
|Resource|
|Research|
|Request|
|Reporting|
|Replication|
|Replenish|
|Replace|
|Repair|
|Renewable-Resource|
|Remove|
|Relinquish|
|Release|
|Release-Resource|
|Relation|
|Region|
|Reflexive-Cliche|
|Recording|
|Record|
|Recognize|
|Recipient-Role|
|Receive|
|Read|
|Rate-Value|
|Rate-Scale|
|Rate-Constant|
|Radius-Scale|
|Radius-Constant|
|Question|
|Quantity-Value|
|Quantity-Constant|
|Pupil|
|Province|
|Prosecution|
|Property|
|Property-Value|
|Property-Relation|
|Property-Group|
|Property-Class-Order|
|Propel|
|Product|
|Produce|
|Priority-Scale|
|Priority-Constant|
|Print|
|Primary-Constant|
|Pressure-Value|
|Pressure-Scale|
|Pressure-Constant|
|Power-Value|
|Power-Constant|
|Portal|
|Portal-Covering|
|Political-State|
|Polarity-Value|
|Polarity-Constant|
|Platform|
|Plastic|
|Planning|
|Place|
|Place-Order|
|Piece-of-Wood|
|Piece-of-Tissue|
|Piece-of-Substance|
|Piece-of-Stone|
|Piece-of-Rubber|
|Piece-of-Plastic|
|Piece-of-Paper|
|Piece-of-Metal|
|Piece-of-Glass|
|Physical-Object|
|Physical-Mark|
|Physical-Document|
|Person|
|Perimeter-Scale|
|Perimeter-Constant|
|Perceive|
|Penetrate|
|Participant|
|Participant-Relation|
|ParkingLot|
|Outlet|
|Orientation-Constant|
|Orient|
|Organizing|
|Organization|
|Organism|
|Paper|
|Operations|
|Open|
|Obtain|
|Obstruct|
|Number-Field|
|Nonrenewable-Resource|
|Natural-Language|
|NL-Slot-Group|
|Multislot-Value-Viewpoint|
|Move|
|Move-Together|
|Move-Through|
|Move-Out-Of|
|Move-Into|
|Move-Apart|
|Money|
|Momentum-Value|
|Moment-of-Inertia-Value|
|Method|
|Metal|
|Message|
|Message-Field|
|Meronymic-Relation|
|Medium|
|Meal|
|Match-Result-Viewpoint|
|Mass-Value|
|Mass-Scale|
|Mass-Constant|
|Mark|
|Manner-Value|
|Manner-Constant|
|Make-Request|
|Make-Inaccessible|
|Make-Contact|
|Make-Accessible|
|Maintenance|
|Magnitude-Value|
|Lunch|
|Luminous-Intensity-Value|
|Luminous-Intensity-Constant|
|Luminous-Flux-Value|
|Luminous-Flux-Constant|
|Luminance-Value|
|Luminance-Constant|
|Loser|
|Lose|
|Longitude-Constant|
|Locomotion|
|Load|
|Living-Entity|
|Liquid-Substance|
|Light|
|Lie|
|Let-Go-Of|
|Let-Fall|
|Length-Value|
|Length-Scale|
|Length-Constant|
|Leave|
|Learning|
|Learn|
|Latitude-Constant|
|Language|
|KM-Slot-Group|
|KM-Class|
|Invade|
|Interpret|
|Interface-Slot|
|Interaction|
|Intentional|
|Intensity-Value|
|Intensity-Scale|
|Intensity-Constant|
|Integrity-Value|
|Integrity-Scale|
|Integrity-Constant|
|Intangible-Entity|
|Instrument-Role|
|Instruction|
|Institution|
|Inquire|
|Innovation|
|Information|
|Information-Sequence|
|Increase|
|Inanimate-Object|
|Improvement|
|Importance-Scale|
|Importance-Constant|
|Impair|
|Identification-Constant|
|Hold|
|Height-Scale|
|Height-Constant|
|Heat|
|Hear|
|Healing|
|Head-Shake|
|Head-Nod|
|Harm|
|Hallway|
|Growth|
|Group|
|Goal|
|Go-To|
|Go-Through|
|Glass|
|Give|
|Gesticulate|
|Gas-Substance|
|Furniture|
|Furnishing|
|Fuel|
|Frequency-Value|
|Frequency-Scale|
|Frequency-Constant|
|Forget|
|Food|
|Follow|
|Fluid-Substance|
|Floor|
|Financing|
|Filter|
|Fidget|
|Feed|
|Family|
|Fall|
|Express|
|Expose|
|Expand|
|Exit|
|EventProperty|
|Event|
|Equation-Set|
|Entrance|
|EntityProperty|
|Entity|
|Enter|
|Ensemble|
|Engineering|
|Energy|
|Emit|
|Embody|
|Elevator|
|Educational-Institution|
|Edit|
|Eat|
|Duration-Value|
|Duration-Scale|
|Duration-Constant|
|Duplicate|
|Dry|
|Drawer|
|Door|
|Donor-Role|
|Donate|
|Document|
|Divide|
|Dive|
|Distribution|
|Distributing|
|Distinguishing|
|Distance-Scale|
|Distance-Constant|
|Disperse|
|Discussion|
|Discovery|
|Discourse|
|Direction-Scale|
|Direction-Constant|
|Dinner|
|Dim|
|Diameter-Scale|
|Diameter-Constant|
|Device|
|Development|
|Deterioration|
|Detailed-Instance|
|Detach|
|Destruction|
|Destroy|
|Depth-Scale|
|Depth-Constant|
|Department|
|Density-Value|
|Density-Scale|
|Density-Constant|
|Deliver|
|Defense|
|Decrease|
|Deceive|
|Deactivate|
|Day-Constant|
|Damage|
|Creator|
|Create|
|Cover|
|County|
|Country|
|Count-Viewpoint|
|Corporation|
|Copy|
|Cool|
|Convey|
|Contract|
|Contestant|
|Contest|
|Container|
|Consume|
|Construction|
|Constant|
|Constant-Exclusion-Set|
|Consistency-Value|
|Consistency-Constant|
|Connector|
|Confine|
|Conduit|
|Condense|
|Conceptual-Entity|
|Conceal|
|Compute-Quantitative-Minimum|
|Compute-Quantitative-Maximum|
|Compute-Qualitative-Minimum|
|Compute-Qualitative-Maximum|
|Compute-Minimum|
|Compute-Maximum|
|Compete|
|Company|
|Community|
|Communicate|
|Committee|
|Command|
|Come-Together|
|Color-Value|
|Color-Constant|
|Collide|
|Collecting|
|Close|
|Cliche|
|Class-Definition-Viewpoint|
|City|
|Circumference-Scale|
|Circumference-Constant|
|Chemical-Energy|
|Change|
|Cell|
|Ceiling|
|Causal-Relation|
|Categorical|
|Carry|
|Carrier|
|Cardinal|
|Capacity-Value|
|Capacity-Scale|
|Capacity-Constant|
|Cabinet|
|CLIB-Slot-Group|
|Buy|
|Building|
|Building-Complex|
|Brunch|
|Brightness-Value|
|Brightness-Scale|
|Brightness-Constant|
|Brighten|
|Bridge|
|Breakfast|
|Breakability-Value|
|Breakability-Scale|
|Breakability-Constant|
|Break|
|Break-Contact|
|Breach|
|Block|
|Be-Victorious|
|Be-Unblocked|
|Be-Unavailable|
|Be-Touching|
|Be-Supported|
|Be-Stored|
|Be-Standing|
|Be-Stable|
|Be-Sitting|
|Be-Similar|
|Be-Shut-Out|
|Be-Ruined|
|Be-Restrained|
|Be-Related|
|Be-Open|
|Be-Obstructed|
|Be-Known|
|Be-Inaccessible|
|Be-Held|
|Be-Different|
|Be-Defeated|
|Be-Damaged|
|Be-Controlled|
|Be-Contained|
|Be-Confined|
|Be-Concealed|
|Be-Closed|
|Be-Broken|
|Be-Blocked|
|Be-Available|
|Be-Attached-To|
|Be-Activated|
|Be-Accessible|
|Bathroom|
|Barrier|
|Authorized|
|Authorize|
|Attach|
|Assurance|
|Artifact|
|Arithmetic-Quotient|
|Arithmetic-Product|
|Arithmetic-Method|
|Arithmetic-Difference|
|Area-Value|
|Area-Scale|
|Area-Constant|
|Architectural-Structure|
|Animal|
|Animacy-Value|
|Animacy-Constant|
|Angle-Value|
|Angle-Constant|
|Analysis|
|Allocate-Resource|
|Air|
|Aggregate|
|Agentive-Relation|
|Agent-Role|
|Age-Scale|
|Age-Constant|
|Admit|
|Administrative-District|
|Add|
|Activity|
|Activate|
|Action|
|Acceleration-Magnitude-Value|
|Acceleration-Magnitude-Scale|
|Acceleration-Magnitude-Constant|
|Absorb|
))
(defparameter *aura-physics-system* 
  (union *phys-halo-pump-prime-list*
	 (union *science-shared-pump-prime-list* 
		*clib-list*)))

(defparameter *aura-chemistry-system* 
  (union *chem-halo-pump-prime-list*
	 (union *science-shared-pump-prime-list* 
		*clib-list*)))

(defparameter *aura-biology-system* 
  (union *bio-halo-pump-prime-list*
	 (union *science-shared-pump-prime-list* 
		*clib-list*)))

(defparameter *aura-system* 
  (union *aura-physics-system*
	 (union *aura-chemistry-system*
		*aura-biology-system*)))